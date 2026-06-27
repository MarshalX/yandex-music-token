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
