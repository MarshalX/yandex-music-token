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
  - Скачать: https://github.com/MarshalX/yandex-music-token/releases/tag/e1.0
  - Chrome: TODO store link
  - Firefox: TODO store link

### Полезные ссылки

- [Обсуждение получения ЯМ токена](https://github.com/MarshalX/yandex-music-api/discussions/513)
- [Telegram чат про API Yandex.Music](https://t.me/yandex_music_api)
- [Python библиотека с документацией к API Yandex.Music](https://github.com/MarshalX/yandex-music-api)

### Лицензия

MIT
