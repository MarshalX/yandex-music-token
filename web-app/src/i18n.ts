export type Lang = 'ru' | 'en';

export const LANGS: Lang[] = ['ru', 'en'];

const dict = {
  ru: {
    brand: 'Yandex Music Token',
    pageTitle: 'Токен Яндекс Музыки',
    pageDesc:
      'Получение токена OAuth для аккаунта Яндекс Музыки: в браузере, через расширение или приложение для Android.',
    tagline: 'Получение токена OAuth для аккаунта Яндекс Музыки',
    nav: { docs: 'Документация API', github: 'GitHub' },
    banner: {
      text: 'Сайт переехал на новый адрес',
      link: 'ym-token.marshal.dev',
      tail: '. Старый домен music-yandex-bot.ru скоро перестанет работать. Сохраните новый адрес в закладки.',
    },
    hero: {
      title: 'Токен для Яндекс Музыки',
      subtitle:
        'Получите токен OAuth своего аккаунта, чтобы пользоваться неофициальным API Яндекс Музыки в библиотеках и приложениях.',
    },
    whatis: {
      title: 'Что такое токен?',
      body:
        'Токен OAuth открывает доступ к вашему аккаунту Яндекс Музыки. С ним библиотеки и приложения (например, библиотека yandex-music на Python) работают с API от вашего имени. Храните токен в секрете: он даёт полный доступ к аккаунту.',
    },
    tool: {
      title: 'Получить токен в браузере',
      desc:
        'Войдите через Яндекс. Откроется страница Яндекса, где вы подтвердите вход кодом. Работает для всех аккаунтов, токен показывается прямо здесь.',
      deviceButton: 'Войти через Яндекс',
      deviceInstruction: 'Откройте страницу Яндекса и введите код подтверждения:',
      deviceOpen: 'Открыть страницу Яндекса',
      deviceWaiting: 'Ожидаем подтверждения входа на Яндексе…',
      deviceExpired: 'Время действия кода истекло. Попробуйте снова.',
      deviceRetry: 'Попробовать снова',
      deviceCancel: 'Отмена',
      fallbackToggle: 'Войти по логину и паролю',
      fallbackNote: 'Старый способ. Работает не для всех аккаунтов.',
      username: 'Логин или email',
      password: 'Пароль',
      forgot: 'Не помню пароль',
      submit: 'Войти',
      loading: 'Получаем…',
      register: 'Создать Яндекс ID',
      captcha: 'Введите код с картинки',
      captchaRefresh: 'Обновить',
    },
    result: {
      title: 'Ваш токен готов',
      copy: 'Скопировать',
      copied: 'Скопировано!',
      again: 'Получить другой',
      warning: 'Не делитесь этим токеном. Он даёт полный доступ к вашему аккаунту.',
    },
    error: {
      retry: 'Если пароль верный, но войти не удаётся, попробуйте другой способ ниже.',
    },
    methods: {
      title: 'Способы получения токена',
      subtitle: 'Если этот способ не сработал, есть ещё два.',
      web: {
        title: 'В браузере',
        desc: 'Прямо на этой странице. Подтвердите вход на Яндексе. Работает для всех аккаунтов.',
        badge: 'Этот сайт',
      },
      ext: {
        title: 'Расширение для браузера',
        desc: 'Перехватывает токен со страницы входа Яндекса. Подходит для большинства аккаунтов.',
      },
      android: {
        title: 'Приложение для Android',
        desc: 'Использует современный SDK Яндекса (intents + WebView). Работает для всех аккаунтов.',
        download: 'Скачать APK',
      },
    },
    safety: {
      title: 'Это безопасно',
      direct: {
        title: 'Напрямую в Яндекс по HTTPS',
        desc: 'Данные отправляются прямо на серверы Яндекса по защищённому соединению HTTPS, без посредников.',
      },
      browser: {
        title: 'Всё в браузере',
        desc: 'У сайта нет сервера. Токен создаётся локально, в вашем браузере.',
      },
      open: { title: 'Открытый код', desc: 'Весь исходный код опубликован на GitHub.' },
    },
    footer: { source: 'Исходный код', author: 'Автор', lib: 'Библиотека API на Python' },
  },

  en: {
    brand: 'Yandex Music Token',
    pageTitle: 'Yandex Music Token',
    pageDesc:
      'Extract the OAuth token of your Yandex Music account: in the browser, via a browser extension, or an Android app.',
    tagline: 'Extract the OAuth token of your Yandex Music account',
    nav: { docs: 'API docs', github: 'GitHub' },
    banner: {
      text: 'The site has moved to',
      link: 'ym-token.marshal.dev',
      tail: '. The old domain music-yandex-bot.ru will stop working soon. Please bookmark the new address.',
    },
    hero: {
      title: 'Your Yandex Music token',
      subtitle:
        "Get your account's OAuth token to use the unofficial Yandex Music API in libraries and apps.",
    },
    whatis: {
      title: 'What is a token?',
      body:
        'An OAuth token is an access key to your Yandex Music account. With it, libraries and apps (for example, the yandex-music Python library) use the API on your behalf. Keep it secret: it grants full access to your account.',
    },
    tool: {
      title: 'Get a token in your browser',
      desc:
        'Sign in with Yandex. A Yandex page opens where you confirm sign-in with a code. Works for all accounts, and the token is shown right here.',
      deviceButton: 'Sign in with Yandex',
      deviceInstruction: 'Open the Yandex page and enter the confirmation code:',
      deviceOpen: 'Open the Yandex page',
      deviceWaiting: 'Waiting for confirmation on Yandex…',
      deviceExpired: 'The code has expired. Please try again.',
      deviceRetry: 'Try again',
      deviceCancel: 'Cancel',
      fallbackToggle: 'Sign in with login and password',
      fallbackNote: 'Legacy method. Does not work for all accounts.',
      username: 'Login or email',
      password: 'Password',
      forgot: 'Forgot password',
      submit: 'Sign in',
      loading: 'Working…',
      register: 'Create a Yandex ID',
      captcha: 'Enter the code from the image',
      captchaRefresh: 'Refresh',
    },
    result: {
      title: 'Your token is ready',
      copy: 'Copy',
      copied: 'Copied!',
      again: 'Get another',
      warning: 'Do not share this token. It grants full access to your account.',
    },
    error: {
      retry: 'If the password is correct but sign-in fails, try another method below.',
    },
    methods: {
      title: 'Ways to get a token',
      subtitle: "If this method didn't work, there are two more.",
      web: {
        title: 'In the browser',
        desc: 'Right here. Confirm sign-in on Yandex. Works for all accounts.',
        badge: 'This site',
      },
      ext: {
        title: 'Browser extension',
        desc: "Intercepts the token from Yandex's login page. Works for most accounts.",
      },
      android: {
        title: 'Android app',
        desc: "Uses Yandex's modern SDK (intents + WebView). Works for all accounts.",
        download: 'Download APK',
      },
    },
    safety: {
      title: 'Safe by design',
      direct: {
        title: 'Straight to Yandex over HTTPS',
        desc: 'Your data goes straight to Yandex servers over an encrypted HTTPS connection, with no intermediary.',
      },
      browser: {
        title: 'All in your browser',
        desc: 'The site has no backend. The token is created locally, in your browser.',
      },
      open: { title: 'Open source', desc: 'All source code is published on GitHub.' },
    },
    footer: { source: 'Source code', author: 'Author', lib: 'Python API library' },
  },
};

export type Dict = (typeof dict)['en'];

export function detectLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'ru' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function t(lang: Lang): Dict {
  return dict[lang];
}
