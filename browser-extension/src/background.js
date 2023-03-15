const OATUH_APP_ID = '23cabbbdc6cd418abb4b39c32c41195d';

const TOKEN_KEY = 'yandex-music-token';

const BOT_URL = 'https://t.me/music_yandex_bot?start='
const OUATH_URL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${OATUH_APP_ID}`;
const URL_WITH_ACCESS_TOKEN_REGEX = 'https:\\/\\/music\\.yandex\\.(?:ru|com|by|kz|ua)\\/#access_token=([^&]*)';

let _oauthTabId;

const openOauthTab = () => {
  chrome.tabs.create({url: OUATH_URL}, (tab) => { _oauthTabId = tab.id});
};

const openBotTab = (startParam) => {
  chrome.tabs.create({url: `${BOT_URL}${startParam}`});
}

chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  if (_oauthTabId !== tabId) {
    return;
  }

  const match = tab.url.match(URL_WITH_ACCESS_TOKEN_REGEX);
  if (match) {
    chrome.storage.local.set({[TOKEN_KEY]: match[1]});
    chrome.tabs.remove(_oauthTabId);

    _oauthTabId = null;

    openBotTab(match[1]);
  }
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action == 'open_oauth') {
    openOauthTab();
  }
});
