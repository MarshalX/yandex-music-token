## Авторизация в Яндекс.Музыка

Проекты для авторизации в свой аккаунт в [Telegram-боте Яндекc.Музыки](https://t.me/music_yandex_bot). 

Позволяют скопировать токен для других нужд.

### Варианты входа

Существует три варианта входа:
- **[web-app](web-app)** - использует старую версию OAuth. Работает не для всех аккаунтов.
  - Сайт: https://music-yandex-bot.ru
- **[android-app](android-app)** - использует современную SDK работающую на intents + webview. Работает для всех аккаунтов.
  - APK файл: https://github.com/MarshalX/yandex-music-token/releases
- **[browser-extension](browser-extension)** - использует другой вариант OAuth авторизации. Перехватывает токен из перенаправления.
  - Chrome: https://chrome.google.com/webstore/detail/yandex-music-token/lcbjeookjibfhjjopieifgjnhlegmkib
  - Firefox: https://addons.mozilla.org/en-US/firefox/addon/yandex-music-token/

### Полезные ссылки

- [Обсуждение получения ЯМ токена](https://github.com/MarshalX/yandex-music-api/discussions/513)
- [Telegram чат про API Yandex.Music](https://t.me/yandex_music_api)
- [Python библиотека с документацией к API Yandex.Music](https://github.com/MarshalX/yandex-music-api)

### Лицензия

MIT
