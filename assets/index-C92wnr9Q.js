var A=Object.defineProperty;var P=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>P(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const S={ru:{brand:"Yandex Music Token",pageTitle:"Токен Яндекс Музыки",pageDesc:"Получение токена OAuth для аккаунта Яндекс Музыки: в браузере, через расширение или приложение для Android.",tagline:"Получение токена OAuth для аккаунта Яндекс Музыки",nav:{docs:"Документация API",github:"GitHub"},banner:{text:"Сайт переехал на новый адрес",link:"ym-token.marshal.dev",tail:". Старый домен music-yandex-bot.ru скоро перестанет работать. Сохраните новый адрес в закладки."},hero:{title:"Токен для Яндекс Музыки",subtitle:"Получите токен OAuth своего аккаунта, чтобы пользоваться неофициальным API Яндекс Музыки в библиотеках и приложениях."},whatis:{title:"Что такое токен?",body:"Токен OAuth открывает доступ к вашему аккаунту Яндекс Музыки. С ним библиотеки и приложения (например, библиотека yandex-music на Python) работают с API от вашего имени. Храните токен в секрете: он даёт полный доступ к аккаунту."},tool:{title:"Получить токен в браузере",desc:"Войдите через Яндекс. Откроется страница Яндекса, где вы подтвердите вход кодом. Работает для всех аккаунтов, токен показывается прямо здесь.",deviceButton:"Войти через Яндекс",deviceInstruction:"Откройте страницу Яндекса и введите код подтверждения:",deviceOpen:"Открыть страницу Яндекса",deviceWaiting:"Ожидаем подтверждения входа на Яндексе…",deviceExpired:"Время действия кода истекло. Попробуйте снова.",deviceRetry:"Попробовать снова",deviceCancel:"Отмена",fallbackToggle:"Войти по логину и паролю",fallbackNote:"Старый способ. Работает не для всех аккаунтов.",username:"Логин или email",password:"Пароль",forgot:"Не помню пароль",submit:"Войти",loading:"Получаем…",register:"Создать Яндекс ID",captcha:"Введите код с картинки",captchaRefresh:"Обновить"},result:{title:"Ваш токен готов",copy:"Скопировать",copied:"Скопировано!",again:"Получить другой",warning:"Не делитесь этим токеном. Он даёт полный доступ к вашему аккаунту."},error:{retry:"Если пароль верный, но войти не удаётся, попробуйте другой способ ниже."},methods:{title:"Способы получения токена",subtitle:"Если этот способ не сработал, есть ещё два.",web:{title:"В браузере",desc:"Прямо на этой странице. Подтвердите вход на Яндексе. Работает для всех аккаунтов.",badge:"Этот сайт"},ext:{title:"Расширение для браузера",desc:"Перехватывает токен со страницы входа Яндекса. Подходит для большинства аккаунтов."},android:{title:"Приложение для Android",desc:"Использует современный SDK Яндекса (intents + WebView). Работает для всех аккаунтов.",download:"Скачать APK"}},safety:{title:"Это безопасно",direct:{title:"Напрямую в Яндекс по HTTPS",desc:"Данные отправляются прямо на серверы Яндекса по защищённому соединению HTTPS, без посредников."},browser:{title:"Всё в браузере",desc:"У сайта нет сервера. Токен создаётся локально, в вашем браузере."},open:{title:"Открытый код",desc:"Весь исходный код опубликован на GitHub."}},footer:{source:"Исходный код",author:"Автор",lib:"Библиотека API на Python"}},en:{brand:"Yandex Music Token",pageTitle:"Yandex Music Token",pageDesc:"Extract the OAuth token of your Yandex Music account: in the browser, via a browser extension, or an Android app.",tagline:"Extract the OAuth token of your Yandex Music account",nav:{docs:"API docs",github:"GitHub"},banner:{text:"The site has moved to",link:"ym-token.marshal.dev",tail:". The old domain music-yandex-bot.ru will stop working soon. Please bookmark the new address."},hero:{title:"Your Yandex Music token",subtitle:"Get your account's OAuth token to use the unofficial Yandex Music API in libraries and apps."},whatis:{title:"What is a token?",body:"An OAuth token is an access key to your Yandex Music account. With it, libraries and apps (for example, the yandex-music Python library) use the API on your behalf. Keep it secret: it grants full access to your account."},tool:{title:"Get a token in your browser",desc:"Sign in with Yandex. A Yandex page opens where you confirm sign-in with a code. Works for all accounts, and the token is shown right here.",deviceButton:"Sign in with Yandex",deviceInstruction:"Open the Yandex page and enter the confirmation code:",deviceOpen:"Open the Yandex page",deviceWaiting:"Waiting for confirmation on Yandex…",deviceExpired:"The code has expired. Please try again.",deviceRetry:"Try again",deviceCancel:"Cancel",fallbackToggle:"Sign in with login and password",fallbackNote:"Legacy method. Does not work for all accounts.",username:"Login or email",password:"Password",forgot:"Forgot password",submit:"Sign in",loading:"Working…",register:"Create a Yandex ID",captcha:"Enter the code from the image",captchaRefresh:"Refresh"},result:{title:"Your token is ready",copy:"Copy",copied:"Copied!",again:"Get another",warning:"Do not share this token. It grants full access to your account."},error:{retry:"If the password is correct but sign-in fails, try another method below."},methods:{title:"Ways to get a token",subtitle:"If this method didn't work, there are two more.",web:{title:"In the browser",desc:"Right here. Confirm sign-in on Yandex. Works for all accounts.",badge:"This site"},ext:{title:"Browser extension",desc:"Intercepts the token from Yandex's login page. Works for most accounts."},android:{title:"Android app",desc:"Uses Yandex's modern SDK (intents + WebView). Works for all accounts.",download:"Download APK"}},safety:{title:"Safe by design",direct:{title:"Straight to Yandex over HTTPS",desc:"Your data goes straight to Yandex servers over an encrypted HTTPS connection, with no intermediary."},browser:{title:"All in your browser",desc:"The site has no backend. The token is created locally, in your browser."},open:{title:"Open source",desc:"All source code is published on GitHub."}},footer:{source:"Source code",author:"Author",lib:"Python API library"}}};function L(){const e=localStorage.getItem("lang");return e==="ru"||e==="en"?e:navigator.language.toLowerCase().startsWith("ru")?"ru":"en"}function _(e){return S[e]}const O="https://oauth.yandex.com/token",b="23cabbbdc6cd418abb4b39c32c41195d",E="53bc75238f0c4d08a118e51fe9203300",D="https://oauth.yandex.ru/device/code",M="https://oauth.yandex.ru/token",Y="Yandex Music Token (web)";class T extends Error{constructor(n){super(n.error_description??"Captcha required");v(this,"body");this.name="CaptchaRequired",this.body=n}}class I extends Error{constructor(n){super(n.error_description??"Wrong captcha");v(this,"body");this.name="CaptchaWrong",this.body=n}}function m(e){return Object.entries(e).filter(([,t])=>t!==void 0&&t!=="").map(([t,n])=>`${encodeURIComponent(t)}=${encodeURIComponent(n)}`).join("&")}async function B({username:e,password:t,captchaAnswer:n,captchaKey:i}){const r={grant_type:"password",client_id:b,client_secret:E,username:e,password:t};n&&i&&(r.x_captcha_answer=n,r.x_captcha_key=i);const a=await fetch(O,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:m(r)});if(!a.ok){const p=await a.json().catch(()=>({})),h=p.error_description||"Unknown HTTP error";throw h.includes("CAPTCHA")?h.includes("Wrong")?new I(p):new T(p):new Error(h)}return(await a.json()).access_token}function U(){let e=localStorage.getItem("device_id");return e||(e=Array.from({length:16},()=>Math.floor(Math.random()*36).toString(36)).join(""),localStorage.setItem("device_id",e)),e}async function j(){const e=await fetch(D,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:m({client_id:b,device_id:U(),device_name:Y})}),t=await e.json().catch(()=>({}));if(!e.ok)throw new Error(t.error_description||t.error||"Unknown HTTP error");return{deviceCode:t.device_code,userCode:t.user_code,verificationUrl:t.verification_url,interval:t.interval,expiresIn:t.expires_in}}async function W(e){const t=await fetch(M,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:m({grant_type:"device_code",code:e,client_id:b,client_secret:E})}),n=await t.json().catch(()=>({}));if(t.ok)return n.access_token;if(n.error==="authorization_pending")return null;throw new Error(n.error_description||n.error||"Unknown HTTP error")}const c={repo:"https://github.com/MarshalX/yandex-music-token",author:"https://github.com/MarshalX/",lib:"https://github.com/MarshalX/yandex-music-api",docs:"https://ym.marshal.dev",releases:"https://github.com/MarshalX/yandex-music-token/releases",chrome:"https://chrome.google.com/webstore/detail/yandex-music-token/lcbjeookjibfhjjopieifgjnhlegmkib",firefox:"https://addons.mozilla.org/en-US/firefox/addon/yandex-music-token/",forgot:"https://passport.yandex.ru/auth/restore/",register:"https://passport.yandex.ru/registration",newDomain:"https://ym-token.marshal.dev"},o={lang:L(),username:"",password:"",captchaAnswer:"",loading:!1,copied:!1,device:{active:!1,polling:!1},showPasswordForm:!1},H=document.getElementById("app"),l=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),f={globe:'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg>',puzzle:'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3v2a2 2 0 1 0 4 0V3h4a1 1 0 0 1 1 1v4h-2a2 2 0 1 0 0 4h2v4a1 1 0 0 1-1 1h-4v-2a2 2 0 1 0-4 0v2H6a1 1 0 0 1-1-1v-4H3a2 2 0 1 0 0-4h2V4a1 1 0 0 1 1-1h4Z"/></svg>',phone:'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>',shield:'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z"/></svg>',browser:'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',code:'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 8-4 4 4 4M16 8l4 4-4 4"/></svg>'};function R(){return`<div class="lang-switch">
    ${["ru","en"].map(e=>`<button data-lang="${e}" class="${o.lang===e?"active":""}">${e.toUpperCase()}</button>`).join("")}
  </div>`}function K(e){return`<header class="site-header">
    <a class="brand" href="${c.newDomain}">
      <img src="/logo.png" alt="" />
      <span>${e.brand}</span>
    </a>
    <span class="header-spacer"></span>
    <nav class="nav-links">
      <a href="${c.docs}" target="_blank" rel="noreferrer"><span class="nav-text">${e.nav.docs}</span></a>
      <a href="${c.repo}" target="_blank" rel="noreferrer">${e.nav.github}</a>
      ${R()}
    </nav>
  </header>`}function N(e){return`<section class="tool card result" id="tool">
    <h2>${e.result.title}</h2>
    <code class="token-box" id="token-box">${l(o.token)}</code>
    <p class="token-warning">${e.result.warning}</p>
    <button class="btn btn-primary" id="copy-btn">${o.copied?e.result.copied:e.result.copy}</button>
    <button class="btn btn-secondary" id="again-btn">${e.result.again}</button>
  </section>`}function F(e){const t=o.device,n=t.error||t.expired,i=t.error?`<div class="error">${l(t.error)}</div>`:t.expired?`<div class="error">${e.tool.deviceExpired}</div>`:`<p class="device-status"><span class="spinner"></span>${e.tool.deviceWaiting}</p>`;return`<section class="tool card" id="tool">
    <h2>${e.tool.title}</h2>
    <p class="tool-desc">${e.tool.deviceInstruction}</p>
    <div class="code-box">
      <span class="code" id="user-code">${l(t.userCode??"")}</span>
      <button type="button" class="btn-icon" id="copy-code">${o.copied?e.result.copied:e.result.copy}</button>
    </div>
    <a href="${l(t.verificationUrl??"#")}" target="_blank" rel="noreferrer">
      <button type="button" class="btn btn-primary">${e.tool.deviceOpen}</button>
    </a>
    ${i}
    <button type="button" class="btn btn-secondary" id="${n?"device-retry":"device-cancel"}">
      ${n?e.tool.deviceRetry:e.tool.deviceCancel}
    </button>
  </section>`}function V(e){const t=o.captchaUrl?`<div class="captcha">
        <img src="${l(o.captchaUrl)}" alt="captcha" />
        <button type="button" class="btn btn-secondary" id="captcha-refresh">${e.tool.captchaRefresh}</button>
      </div>
      <div class="field">
        <input class="input" id="captcha-answer" type="text" autocomplete="off"
          placeholder="${e.tool.captcha}" value="${l(o.captchaAnswer)}" />
      </div>`:"",n=o.error?`<div class="error">${l(o.error)}<span class="retry">${e.error.retry}</span></div>`:"";return`<form id="tool-form" class="password-form">
    <p class="fallback-note">${e.tool.fallbackNote}</p>
    <div class="field">
      <input class="input" id="username" type="text" autocomplete="username"
        placeholder="${e.tool.username}" value="${l(o.username)}" />
    </div>
    <div class="field">
      <input class="input" id="password" type="password" autocomplete="current-password"
        placeholder="${e.tool.password}" value="${l(o.password)}" />
      <a class="field-hint" href="${c.forgot}" target="_blank" rel="noreferrer">${e.tool.forgot}</a>
    </div>
    ${t}
    ${n}
    <button class="btn btn-primary" type="submit" id="submit-btn" ${o.loading?"disabled":""}>
      ${o.loading?e.tool.loading:e.tool.submit}
    </button>
    <a href="${c.register}" target="_blank" rel="noreferrer">
      <button type="button" class="btn btn-secondary">${e.tool.register}</button>
    </a>
  </form>`}function q(e){return o.token?N(e):o.device.active?F(e):`<section class="tool card" id="tool">
    <h2>${e.tool.title}</h2>
    <p class="tool-desc">${e.tool.desc}</p>
    <button type="button" class="btn btn-primary" id="device-start">${e.tool.deviceButton}</button>
    <button type="button" class="btn-link" id="toggle-password">${e.tool.fallbackToggle}</button>
    ${o.showPasswordForm?V(e):""}
  </section>`}function G(e){return`<section id="methods">
    <h2 class="section-title">${e.methods.title}</h2>
    <p class="section-sub">${e.methods.subtitle}</p>
    <div class="grid">
      <div class="card tile">
        ${f.globe}
        <h3>${e.methods.web.title} <span class="badge">${e.methods.web.badge}</span></h3>
        <p>${e.methods.web.desc}</p>
        <div class="tile-links"><a href="#tool">↑ ${e.tool.title}</a></div>
      </div>
      <div class="card tile">
        ${f.puzzle}
        <h3>${e.methods.ext.title}</h3>
        <p>${e.methods.ext.desc}</p>
        <div class="tile-links">
          <a href="${c.chrome}" target="_blank" rel="noreferrer">Chrome</a>
          <a href="${c.firefox}" target="_blank" rel="noreferrer">Firefox</a>
        </div>
      </div>
      <div class="card tile">
        ${f.phone}
        <h3>${e.methods.android.title}</h3>
        <p>${e.methods.android.desc}</p>
        <div class="tile-links"><a href="${c.releases}" target="_blank" rel="noreferrer">${e.methods.android.download}</a></div>
      </div>
    </div>
  </section>`}function z(e){const t=[[f.shield,e.safety.direct],[f.browser,e.safety.browser],[f.code,e.safety.open]];return`<section id="safety">
    <h2 class="section-title">${e.safety.title}</h2>
    <div class="grid">
      ${t.map(([n,i])=>`<div class="card tile">${n}<h3>${i.title}</h3><p>${i.desc}</p></div>`).join("")}
    </div>
  </section>`}function X(e){return`<footer class="site-footer"><div class="container footer-row">
    <span>${e.footer.source}: <a href="${c.repo}" target="_blank" rel="noreferrer">yandex-music-token</a></span>
    <span>${e.footer.lib}: <a href="${c.lib}" target="_blank" rel="noreferrer">yandex-music-api</a></span>
    <span>${e.footer.author}: <a href="${c.author}" target="_blank" rel="noreferrer">@MarshalX</a></span>
  </div></footer>`}function Z(){const e=_(o.lang);return`<div class="container">
    ${K(e)}
    <div class="banner">${e.banner.text}: <a href="${c.newDomain}">${e.banner.link}</a>${e.banner.tail}</div>
    <main>
      <section class="hero">
        <h1>${e.hero.title}</h1>
        <p>${e.hero.subtitle}</p>
      </section>
      ${q(e)}
      <section id="whatis">
        <h2 class="section-title">${e.whatis.title}</h2>
        <p class="section-sub">${e.whatis.body}</p>
      </section>
      ${G(e)}
      ${z(e)}
    </main>
  </div>
  ${X(e)}`}function s(){var t;const e=_(o.lang);document.documentElement.lang=o.lang,document.title=e.pageTitle,(t=document.querySelector('meta[name="description"]'))==null||t.setAttribute("content",e.pageDesc),H.innerHTML=Z(),Q()}async function w(){if(!o.loading){o.loading=!0,o.error=void 0,s();try{const e=await B({username:o.username,password:o.password,captchaAnswer:o.captchaAnswer||void 0,captchaKey:o.captchaKey});o.token=e,o.captchaUrl=void 0,o.captchaKey=void 0,o.captchaAnswer=""}catch(e){e instanceof T||e instanceof I?(o.captchaUrl=e.body.x_captcha_url,o.captchaKey=e.body.x_captcha_key,o.captchaAnswer="",o.error=e.body.error_description):o.error=e.message}finally{o.loading=!1,s()}}}async function k(e){!e||!navigator.clipboard||(await navigator.clipboard.writeText(e),o.copied=!0,s(),setTimeout(()=>{o.copied=!1,s()},2e3))}let u=0;async function $(){const e=++u;o.device={active:!0,polling:!0},s();try{const t=await j();if(e!==u)return;o.device={active:!0,polling:!0,userCode:t.userCode,verificationUrl:t.verificationUrl,deviceCode:t.deviceCode,expiresAt:Date.now()+t.expiresIn*1e3},s(),C(e,t.interval*1e3)}catch(t){if(e!==u)return;o.device={active:!0,polling:!1,error:t.message},s()}}function C(e,t){setTimeout(async()=>{if(e===u){if(Date.now()>(o.device.expiresAt??0)){o.device.polling=!1,o.device.expired=!0,s();return}try{const n=await W(o.device.deviceCode);if(e!==u)return;n?(o.token=n,o.device={active:!1,polling:!1},s()):C(e,t)}catch(n){if(e!==u)return;o.device.polling=!1,o.device.error=n.message,s()}}},t)}function J(){u++,o.device={active:!1,polling:!1},s()}function x(e){const t=document.getElementById(e);t==null||t.addEventListener("input",()=>{o[e]=t.value})}function Q(){var t,n,i,r,a,d,p,h,y;document.querySelectorAll("[data-lang]").forEach(g=>g.addEventListener("click",()=>{o.lang=g.dataset.lang,localStorage.setItem("lang",o.lang),s()})),(t=document.getElementById("device-start"))==null||t.addEventListener("click",()=>void $()),(n=document.getElementById("device-retry"))==null||n.addEventListener("click",()=>void $()),(i=document.getElementById("device-cancel"))==null||i.addEventListener("click",J),(r=document.getElementById("copy-code"))==null||r.addEventListener("click",()=>void k(o.device.userCode)),(a=document.getElementById("toggle-password"))==null||a.addEventListener("click",()=>{o.showPasswordForm=!o.showPasswordForm,s()}),x("username"),x("password");const e=document.getElementById("captcha-answer");e==null||e.addEventListener("input",()=>{o.captchaAnswer=e.value}),(d=document.getElementById("tool-form"))==null||d.addEventListener("submit",g=>{g.preventDefault(),w()}),(p=document.getElementById("captcha-refresh"))==null||p.addEventListener("click",()=>void w()),(h=document.getElementById("copy-btn"))==null||h.addEventListener("click",()=>void k(o.token)),(y=document.getElementById("again-btn"))==null||y.addEventListener("click",()=>{o.token=void 0,o.copied=!1,s()})}s();
