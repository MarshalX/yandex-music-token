## Получение токена Яндекс Музыки

Проекты для получения OAuth токена своего аккаунта Яндекс Музыки. Токен можно использовать в [Python библиотеке](https://github.com/MarshalX/yandex-music-api) и других приложениях.

### Варианты входа

Существует три варианта входа:
- **[web-app](web-app)**: вход через Яндекс (device flow), работает для всех аккаунтов. Есть запасной вход по логину и паролю.
  - Сайт: https://ym-token.marshal.dev
- **[android-app](android-app)**: использует современный SDK на intents и webview. Работает для всех аккаунтов.
  - APK файл: https://github.com/MarshalX/yandex-music-token/releases
- **[browser-extension](browser-extension)**: другой вариант OAuth авторизации. Перехватывает токен из перенаправления.
  - Chrome: https://chrome.google.com/webstore/detail/yandex-music-token/lcbjeookjibfhjjopieifgjnhlegmkib
  - Firefox: https://addons.mozilla.org/en-US/firefox/addon/yandex-music-token/

### Полезные ссылки

- [Обсуждение получения ЯМ токена](https://github.com/MarshalX/yandex-music-api/discussions/513)
- [Telegram чат про API Yandex.Music](https://t.me/yandex_music_api)
- [Python библиотека с документацией к API Yandex.Music](https://github.com/MarshalX/yandex-music-api)

### Лицензия

MIT
