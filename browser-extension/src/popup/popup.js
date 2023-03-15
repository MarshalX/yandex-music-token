const TOKEN_KEY = 'yandex-music-token';
const BOT_URL = 'https://t.me/music_yandex_bot?start='
const REQUEST_PAYLOAD = { action: 'open_oauth'};

const openBotTab = (startParam) => {
  chrome.tabs.create({url: `${BOT_URL}${startParam}`});
  closePopup();
}

const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    return false;
  }

  navigator.clipboard.writeText(text); // mb need to catch erros

  return true;
}

const closePopup = () => {
  window.close();
}

const getToken = (callback) => {
  chrome.storage.local.get([TOKEN_KEY], (result) => {
    callback(result[TOKEN_KEY]);
  });
}

const clearStorage = () => {
  chrome.storage.local.set({[TOKEN_KEY]: null});
  closePopup();
}

const requestAuth = () => {
  chrome.runtime.sendMessage(REQUEST_PAYLOAD);
};

const processToken = (token) => {
  const content = document.getElementById('content');

  const createPrimaryBtn = (text) => {
    const btn = document.createElement('button');

    btn.className = 'mb-1 btn btn-primary';
    btn.textContent = text;

    return btn;
  }

  if (!token) {
    const authBtn = createPrimaryBtn('Авторизоваться');
    authBtn.addEventListener('click', requestAuth);
    content.appendChild(authBtn);

    return;
  }

  const openBotBtn = createPrimaryBtn('Перейти в бота');
  openBotBtn.addEventListener('click', () => openBotTab(token));
  content.appendChild(openBotBtn);

  document.getElementById('clear_storage').addEventListener('click', () => clearStorage());

  document.getElementById('copy_token').hidden = false;
  document.getElementById('copy_token').addEventListener('click', () => copyTextToClipboard(token));
}

const onLoad = () => {
  getToken(processToken);
}

onLoad();
