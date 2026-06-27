import './styles.css';
import { detectLang, t, type Lang } from './i18n';
import { CaptchaRequired, CaptchaWrong, generateToken } from './api';

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
}

const state: State = {
  lang: detectLang(),
  username: '',
  password: '',
  captchaAnswer: '',
  loading: false,
  copied: false,
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

function toolSection(d: ReturnType<typeof t>): string {
  if (state.token) {
    return `<section class="tool card result" id="tool">
      <h2>${d.result.title}</h2>
      <code class="token-box" id="token-box">${esc(state.token)}</code>
      <p class="token-warning">${d.result.warning}</p>
      <button class="btn btn-primary" id="copy-btn">${state.copied ? d.result.copied : d.result.copy}</button>
      <button class="btn btn-secondary" id="again-btn">${d.result.again}</button>
    </section>`;
  }

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

  return `<section class="tool card" id="tool">
    <h2>${d.tool.title}</h2>
    <p class="tool-desc">${d.tool.desc}</p>
    <form id="tool-form">
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
    </form>
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

function view(): string {
  const d = t(state.lang);
  return `<div class="container">
    ${header(d)}
    <div class="banner">${d.banner.text}: <a href="${LINKS.newDomain}">${d.banner.link}</a>${d.banner.tail}</div>
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

async function copy(): Promise<void> {
  if (!state.token || !navigator.clipboard) return;
  await navigator.clipboard.writeText(state.token);
  state.copied = true;
  render();
  setTimeout(() => {
    state.copied = false;
    render();
  }, 2000);
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
  document.getElementById('copy-btn')?.addEventListener('click', () => void copy());
  document.getElementById('again-btn')?.addEventListener('click', () => {
    state.token = undefined;
    state.copied = false;
    render();
  });
}

render();
