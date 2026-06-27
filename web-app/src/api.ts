/**
 * Yandex OAuth — legacy "password" grant.
 * Reference: https://github.com/MarshalX/yandex-music-api/blob/952145c3b8431385f2fe8273d52d8eb4e49fcceb/yandex_music/client.py#L89
 *
 * Runs entirely in the browser: credentials are sent directly to Yandex,
 * the resulting token never touches a backend (this site has none).
 */

const OAUTH_URL = 'https://oauth.yandex.com/token';
const CLIENT_ID = '23cabbbdc6cd418abb4b39c32c41195d';
const CLIENT_SECRET = '53bc75238f0c4d08a118e51fe9203300';

const DEVICE_CODE_URL = 'https://oauth.yandex.ru/device/code';
const DEVICE_TOKEN_URL = 'https://oauth.yandex.ru/token';
const DEVICE_NAME = 'Yandex Music Token (web)';

export interface CaptchaBody {
  x_captcha_url: string;
  x_captcha_key: string;
  error_description?: string;
}

export class CaptchaRequired extends Error {
  body: CaptchaBody;
  constructor(body: CaptchaBody) {
    super(body.error_description ?? 'Captcha required');
    this.name = 'CaptchaRequired';
    this.body = body;
  }
}

export class CaptchaWrong extends Error {
  body: CaptchaBody;
  constructor(body: CaptchaBody) {
    super(body.error_description ?? 'Wrong captcha');
    this.name = 'CaptchaWrong';
    this.body = body;
  }
}

export interface TokenRequest {
  username: string;
  password: string;
  captchaAnswer?: string;
  captchaKey?: string;
}

function serialize(data: Record<string, string>): string {
  return Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export async function generateToken({
  username,
  password,
  captchaAnswer,
  captchaKey,
}: TokenRequest): Promise<string> {
  const data: Record<string, string> = {
    grant_type: 'password',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    username,
    password,
  };

  if (captchaAnswer && captchaKey) {
    data.x_captcha_answer = captchaAnswer;
    data.x_captcha_key = captchaKey;
  }

  const response = await fetch(OAUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: serialize(data),
  });

  if (!response.ok) {
    const json = await response.json().catch(() => ({}));
    const message: string = json.error_description || 'Unknown HTTP error';
    if (message.includes('CAPTCHA')) {
      throw message.includes('Wrong') ? new CaptchaWrong(json) : new CaptchaRequired(json);
    }
    throw new Error(message);
  }

  const json = await response.json();
  return json.access_token as string;
}

/**
 * Yandex OAuth device flow.
 * The user confirms sign-in on Yandex's own page, so we never see the password.
 * Works for all accounts, including those with 2FA.
 */

export interface DeviceCode {
  deviceCode: string;
  userCode: string;
  verificationUrl: string;
  interval: number;
  expiresIn: number;
}

function getDeviceId(): string {
  let id = localStorage.getItem('device_id');
  if (!id) {
    id = Array.from({ length: 16 }, () => Math.floor(Math.random() * 36).toString(36)).join('');
    localStorage.setItem('device_id', id);
  }
  return id;
}

export async function requestDeviceCode(): Promise<DeviceCode> {
  const response = await fetch(DEVICE_CODE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: serialize({
      client_id: CLIENT_ID,
      device_id: getDeviceId(),
      device_name: DEVICE_NAME,
    }),
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error_description || json.error || 'Unknown HTTP error');
  }
  return {
    deviceCode: json.device_code,
    userCode: json.user_code,
    verificationUrl: json.verification_url,
    interval: json.interval,
    expiresIn: json.expires_in,
  };
}

/** Returns the access token once confirmed, or null while still pending. */
export async function pollDeviceToken(deviceCode: string): Promise<string | null> {
  const response = await fetch(DEVICE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: serialize({
      grant_type: 'device_code',
      code: deviceCode,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  const json = await response.json().catch(() => ({}));
  if (response.ok) {
    return json.access_token as string;
  }
  if (json.error === 'authorization_pending') {
    return null;
  }
  throw new Error(json.error_description || json.error || 'Unknown HTTP error');
}
