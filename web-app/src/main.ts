import './styles.css';
import { detectLang, t, type Lang } from './i18n';
import {
  CaptchaRequired,
  CaptchaWrong,
  generateToken,
  pollDeviceToken,
  requestDeviceCode,
} from './api';

const LINKS = {
  repo: 'https://github.com/MarshalX/yandex-music-token',
  author: 'https://github.com/MarshalX/',
  lib: 'https://github.com/MarshalX/yandex-music-api',
  docs: 'https://ym.marshal.dev',
  releases: 'https://github.com/MarshalX/yandex-music-token/releases',
  chrome:
    'https://chrome.google.com/webstore/detail/yandex-music-token/lcbjeookjibfhjjopieifgjnhlegmkib',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/yandex-music-token/',
  forgot: 'https://passport.yandex.ru/auth/restore/',
  register: 'https://passport.yandex.ru/registration',
  newDomain: 'https://ym-token.marshal.dev',
};

const DOMAIN_BANNER_UNTIL = Date.parse('2026-09-01T00:00:00Z');

interface DeviceState {
  active: boolean;
  polling: boolean;
  userCode?: string;
  verificationUrl?: string;
  deviceCode?: string;
  expiresAt?: number;
  expired?: boolean;
  error?: string;
}

interface State {
  lang: Lang;
  username: string;
  password: string;
  captchaUrl?: string;
  captchaKey?: string;
  captchaAnswer: string;
  error?: string;
  token?: string;
  loading: boolean;
  copied: boolean;
  device: DeviceState;
  showPasswordForm: boolean;
}

const state: State = {
  lang: detectLang(),
  username: '',
  password: '',
  captchaAnswer: '',
  loading: false,
  copied: false,
  device: { active: false, polling: false },
  showPasswordForm: false,
};

const root = document.getElementById('app')!;

const esc = (s: string): string =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );

// Minimal inline icons (currentColor)
const icons = {
  globe:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg>',
  puzzle:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3v2a2 2 0 1 0 4 0V3h4a1 1 0 0 1 1 1v4h-2a2 2 0 1 0 0 4h2v4a1 1 0 0 1-1 1h-4v-2a2 2 0 1 0-4 0v2H6a1 1 0 0 1-1-1v-4H3a2 2 0 1 0 0-4h2V4a1 1 0 0 1 1-1h4Z"/></svg>',
  phone:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  shield:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z"/></svg>',
  browser:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
  code: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 8-4 4 4 4M16 8l4 4-4 4"/></svg>',
};

function langSwitch(): string {
  return `<div class="lang-switch">
    ${(['ru', 'en'] as Lang[])
      .map(
        (l) =>
          `<button data-lang="${l}" class="${state.lang === l ? 'active' : ''}">${l.toUpperCase()}</button>`,
      )
      .join('')}
  </div>`;
}

function header(d: ReturnType<typeof t>): string {
  return `<header class="site-header">
    <a class="brand" href="${LINKS.newDomain}">
      <img src="/logo.png" alt="" />
      <span>${d.brand}</span>
    </a>
    <span class="header-spacer"></span>
    <nav class="nav-links">
      <a href="${LINKS.docs}" target="_blank" rel="noreferrer"><span class="nav-text">${d.nav.docs}</span></a>
      <a href="${LINKS.repo}" target="_blank" rel="noreferrer">${d.nav.github}</a>
      ${langSwitch()}
    </nav>
  </header>`;
}

function resultView(d: ReturnType<typeof t>): string {
  return `<section class="tool card result" id="tool">
    <h2>${d.result.title}</h2>
    <code class="token-box" id="token-box">${esc(state.token!)}</code>
    <p class="token-warning">${d.result.warning}</p>
    <button class="btn btn-primary" id="copy-btn">${state.copied ? d.result.copied : d.result.copy}</button>
    <button class="btn btn-secondary" id="again-btn">${d.result.again}</button>
  </section>`;
}

function deviceView(d: ReturnType<typeof t>): string {
  const dev = state.device;
  const done = dev.error || dev.expired;
  const status = dev.error
    ? `<div class="error">${esc(dev.error)}</div>`
    : dev.expired
      ? `<div class="error">${d.tool.deviceExpired}</div>`
      : `<p class="device-status"><span class="spinner"></span>${d.tool.deviceWaiting}</p>`;

  return `<section class="tool card" id="tool">
    <h2>${d.tool.title}</h2>
    <p class="tool-desc">${d.tool.deviceInstruction}</p>
    <div class="code-box">
      <span class="code" id="user-code">${esc(dev.userCode ?? '')}</span>
      <button type="button" class="btn-icon" id="copy-code">${state.copied ? d.result.copied : d.result.copy}</button>
    </div>
    <a href="${esc(dev.verificationUrl ?? '#')}" target="_blank" rel="noreferrer">
      <button type="button" class="btn btn-primary">${d.tool.deviceOpen}</button>
    </a>
    ${status}
    <button type="button" class="btn btn-secondary" id="${done ? 'device-retry' : 'device-cancel'}">
      ${done ? d.tool.deviceRetry : d.tool.deviceCancel}
    </button>
  </section>`;
}

function passwordForm(d: ReturnType<typeof t>): string {
  const captcha = state.captchaUrl
    ? `<div class="captcha">
        <img src="${esc(state.captchaUrl)}" alt="captcha" />
        <button type="button" class="btn btn-secondary" id="captcha-refresh">${d.tool.captchaRefresh}</button>
      </div>
      <div class="field">
        <input class="input" id="captcha-answer" type="text" autocomplete="off"
          placeholder="${d.tool.captcha}" value="${esc(state.captchaAnswer)}" />
      </div>`
    : '';

  const error = state.error
    ? `<div class="error">${esc(state.error)}<span class="retry">${d.error.retry}</span></div>`
    : '';

  return `<form id="tool-form" class="password-form">
    <p class="fallback-note">${d.tool.fallbackNote}</p>
    <div class="field">
      <input class="input" id="username" type="text" autocomplete="username"
        placeholder="${d.tool.username}" value="${esc(state.username)}" />
    </div>
    <div class="field">
      <input class="input" id="password" type="password" autocomplete="current-password"
        placeholder="${d.tool.password}" value="${esc(state.password)}" />
      <a class="field-hint" href="${LINKS.forgot}" target="_blank" rel="noreferrer">${d.tool.forgot}</a>
    </div>
    ${captcha}
    ${error}
    <button class="btn btn-primary" type="submit" id="submit-btn" ${state.loading ? 'disabled' : ''}>
      ${state.loading ? d.tool.loading : d.tool.submit}
    </button>
    <a href="${LINKS.register}" target="_blank" rel="noreferrer">
      <button type="button" class="btn btn-secondary">${d.tool.register}</button>
    </a>
  </form>`;
}

function toolSection(d: ReturnType<typeof t>): string {
  if (state.token) return resultView(d);
  if (state.device.active) return deviceView(d);

  return `<section class="tool card" id="tool">
    <h2>${d.tool.title}</h2>
    <p class="tool-desc">${d.tool.desc}</p>
    <button type="button" class="btn btn-primary" id="device-start">${d.tool.deviceButton}</button>
    <button type="button" class="btn-link" id="toggle-password">${d.tool.fallbackToggle}</button>
    ${state.showPasswordForm ? passwordForm(d) : ''}
  </section>`;
}

function methodsSection(d: ReturnType<typeof t>): string {
  return `<section id="methods">
    <h2 class="section-title">${d.methods.title}</h2>
    <p class="section-sub">${d.methods.subtitle}</p>
    <div class="grid">
      <div class="card tile">
        ${icons.globe}
        <h3>${d.methods.web.title} <span class="badge">${d.methods.web.badge}</span></h3>
        <p>${d.methods.web.desc}</p>
        <div class="tile-links"><a href="#tool">↑ ${d.tool.title}</a></div>
      </div>
      <div class="card tile">
        ${icons.puzzle}
        <h3>${d.methods.ext.title}</h3>
        <p>${d.methods.ext.desc}</p>
        <div class="tile-links">
          <a href="${LINKS.chrome}" target="_blank" rel="noreferrer">Chrome</a>
          <a href="${LINKS.firefox}" target="_blank" rel="noreferrer">Firefox</a>
        </div>
      </div>
      <div class="card tile">
        ${icons.phone}
        <h3>${d.methods.android.title}</h3>
        <p>${d.methods.android.desc}</p>
        <div class="tile-links"><a href="${LINKS.releases}" target="_blank" rel="noreferrer">${d.methods.android.download}</a></div>
      </div>
    </div>
  </section>`;
}

function safetySection(d: ReturnType<typeof t>): string {
  const tiles: Array<[string, { title: string; desc: string }]> = [
    [icons.shield, d.safety.direct],
    [icons.browser, d.safety.browser],
    [icons.code, d.safety.open],
  ];
  return `<section id="safety">
    <h2 class="section-title">${d.safety.title}</h2>
    <div class="grid">
      ${tiles
        .map(
          ([icon, c]) =>
            `<div class="card tile">${icon}<h3>${c.title}</h3><p>${c.desc}</p></div>`,
        )
        .join('')}
    </div>
  </section>`;
}

function footer(d: ReturnType<typeof t>): string {
  return `<footer class="site-footer"><div class="container footer-row">
    <span>${d.footer.source}: <a href="${LINKS.repo}" target="_blank" rel="noreferrer">yandex-music-token</a></span>
    <span>${d.footer.lib}: <a href="${LINKS.lib}" target="_blank" rel="noreferrer">yandex-music-api</a></span>
    <span>${d.footer.author}: <a href="${LINKS.author}" target="_blank" rel="noreferrer">@MarshalX</a></span>
  </div></footer>`;
}

function banner(d: ReturnType<typeof t>): string {
  if (Date.now() >= DOMAIN_BANNER_UNTIL) return '';
  return `<div class="banner">${d.banner.text}: <a href="${LINKS.newDomain}">${d.banner.link}</a>${d.banner.tail}</div>`;
}

function view(): string {
  const d = t(state.lang);
  return `<div class="container">
    ${header(d)}
    ${banner(d)}
    <main>
      <section class="hero">
        <h1>${d.hero.title}</h1>
        <p>${d.hero.subtitle}</p>
      </section>
      ${toolSection(d)}
      <section id="whatis">
        <h2 class="section-title">${d.whatis.title}</h2>
        <p class="section-sub">${d.whatis.body}</p>
      </section>
      ${methodsSection(d)}
      ${safetySection(d)}
    </main>
  </div>
  ${footer(d)}`;
}

function render(): void {
  const d = t(state.lang);
  document.documentElement.lang = state.lang;
  document.title = d.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', d.pageDesc);
  root.innerHTML = view();
  wire();
}

async function submit(): Promise<void> {
  if (state.loading) return;
  state.loading = true;
  state.error = undefined;
  render();
  try {
    const token = await generateToken({
      username: state.username,
      password: state.password,
      captchaAnswer: state.captchaAnswer || undefined,
      captchaKey: state.captchaKey,
    });
    state.token = token;
    state.captchaUrl = undefined;
    state.captchaKey = undefined;
    state.captchaAnswer = '';
  } catch (e) {
    if (e instanceof CaptchaRequired || e instanceof CaptchaWrong) {
      state.captchaUrl = e.body.x_captcha_url;
      state.captchaKey = e.body.x_captcha_key;
      state.captchaAnswer = '';
      state.error = e.body.error_description;
    } else {
      state.error = (e as Error).message;
    }
  } finally {
    state.loading = false;
    render();
  }
}

async function copyText(text?: string): Promise<void> {
  if (!text || !navigator.clipboard) return;
  await navigator.clipboard.writeText(text);
  state.copied = true;
  render();
  setTimeout(() => {
    state.copied = false;
    render();
  }, 2000);
}

let pollGeneration = 0;

async function startDeviceFlow(): Promise<void> {
  const gen = ++pollGeneration;
  state.device = { active: true, polling: true };
  render();
  try {
    const code = await requestDeviceCode();
    if (gen !== pollGeneration) return;
    state.device = {
      active: true,
      polling: true,
      userCode: code.userCode,
      verificationUrl: code.verificationUrl,
      deviceCode: code.deviceCode,
      expiresAt: Date.now() + code.expiresIn * 1000,
    };
    render();
    schedulePoll(gen, code.interval * 1000);
  } catch (e) {
    if (gen !== pollGeneration) return;
    state.device = { active: true, polling: false, error: (e as Error).message };
    render();
  }
}

function schedulePoll(gen: number, intervalMs: number): void {
  setTimeout(async () => {
    if (gen !== pollGeneration) return;
    if (Date.now() > (state.device.expiresAt ?? 0)) {
      state.device.polling = false;
      state.device.expired = true;
      render();
      return;
    }
    try {
      const token = await pollDeviceToken(state.device.deviceCode!);
      if (gen !== pollGeneration) return;
      if (token) {
        state.token = token;
        state.device = { active: false, polling: false };
        render();
      } else {
        schedulePoll(gen, intervalMs);
      }
    } catch (e) {
      if (gen !== pollGeneration) return;
      state.device.polling = false;
      state.device.error = (e as Error).message;
      render();
    }
  }, intervalMs);
}

function cancelDeviceFlow(): void {
  pollGeneration++;
  state.device = { active: false, polling: false };
  render();
}

function bindInput(id: keyof State): void {
  const el = document.getElementById(id) as HTMLInputElement | null;
  el?.addEventListener('input', () => {
    (state[id] as string) = el.value;
  });
}

function wire(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((btn) =>
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang as Lang;
      localStorage.setItem('lang', state.lang);
      render();
    }),
  );

  // Device flow
  document.getElementById('device-start')?.addEventListener('click', () => void startDeviceFlow());
  document.getElementById('device-retry')?.addEventListener('click', () => void startDeviceFlow());
  document.getElementById('device-cancel')?.addEventListener('click', cancelDeviceFlow);
  document
    .getElementById('copy-code')
    ?.addEventListener('click', () => void copyText(state.device.userCode));
  document.getElementById('toggle-password')?.addEventListener('click', () => {
    state.showPasswordForm = !state.showPasswordForm;
    render();
  });

  // Password fallback
  bindInput('username');
  bindInput('password');

  const captchaAnswer = document.getElementById('captcha-answer') as HTMLInputElement | null;
  captchaAnswer?.addEventListener('input', () => {
    state.captchaAnswer = captchaAnswer.value;
  });

  document.getElementById('tool-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    void submit();
  });
  document.getElementById('captcha-refresh')?.addEventListener('click', () => void submit());

  // Result
  document.getElementById('copy-btn')?.addEventListener('click', () => void copyText(state.token));
  document.getElementById('again-btn')?.addEventListener('click', () => {
    state.token = undefined;
    state.copied = false;
    render();
  });
}

render();
