/**
 * Reference: https://github.com/MarshalX/yandex-music-api/blob/1fc342183ba59e4d1c47b6d8ae5ac6afe46d6a14/yandex_music/client.py#L173
 */

const CLIENT_ID = '23cabbbdc6cd418abb4b39c32c41195d';
const CLIENT_SECRET = '53bc75238f0c4d08a118e51fe9203300';
const X_TOKEN_CLIENT_ID = 'c0ebe342af7d48fbbbfcf2d2eedb8f9e';
const X_TOKEN_CLIENT_SECRET = 'ad0a908f0aa341a182a37ecd75bc319e';

class YandexMusicApi {
    passport_url = 'https://mobileproxy.passport.yandex.net';
    auth_sdk_params = 'app_id=ru.yandex.mobile.music&app_version_name=5.18&app_platform=iPad'

    generate_token_by_login_and_password = async (login, password, track_id, captcha_answer) => {
        if (!track_id) {
            track_id = await this.start_authentication(login);
        }

        let x_token;
        try {
            x_token = await this.send_authentication_password(track_id, password, captcha_answer);
        } catch (e) {
            if (!e.captcha_image_url) {
                throw e;
            } else {
                throw new Captcha({
                    captcha_image_url: e.captcha_image_url,
                    track_id: track_id,
                });
            }
        }

        return await this.generate_yandex_music_token_by_x_token(x_token);
    };

    start_authentication = async login => {
        const url = `${this.passport_url}/2/bundle/mobile/start`;

        const data = {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'login': login,
            'x_token_client_id': X_TOKEN_CLIENT_ID,
            'x_token_client_secret': X_TOKEN_CLIENT_SECRET,
            'display_language': 'ru',
        };

        const res = await this.post(url, data);
        if (!res.status || res.status === 'error') {
            throw new BadRequest(res.errors.join('\n'));
        }

        return res.track_id;
    };

    send_authentication_password = async (track_id, password, captcha_answer) => {
        const url = `${this.passport_url}/1/bundle/mobile/auth/password`;

        const data = {
            'track_id': track_id,
            'password': password,
        }

        if (captcha_answer) {
            data.captcha_answer = captcha_answer;
        }

        const res = await this.post(url, data);

        const status = res.status || 'error';
        if (status === 'ok') {
            return res.x_token;
        }

        if (res.errors.includes('password.not_matched')) {
            throw new BadRequest('Неправильный пароль');
        } else if (res.errors.includes('captcha.required')) {
            throw new Captcha({
                captcha_image_url: res.captcha_image_url,
                track_id: track_id,
            });
        } else if (res.errors.includes('captcha.not_shown')) {
            throw new BadRequest('Капча не была отображена');
        } else {
            throw new BadRequest(res.errors.join('\n'));
        }
    }

    generate_yandex_music_token_by_x_token = async x_token => {
        const url = `${this.passport_url}/1/token/?${this.auth_sdk_params}`

        const data = {
            'access_token': x_token,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'x-token',
        }

        const res = await this.post(url, data);

        if (res.access_token) {
            return res.access_token;
        }

        throw new BadRequest(res.errors.join('\n'));
    }

    serialize = (obj) => {
        let str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
            }
        return str.join('&');
    };

    post = async (url, data) => {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: this.serialize(data),
        })
        return resp.json();
    };
}

class Captcha extends Error {
    constructor(body) {
        super();
        this.body = body
    }
}

class BadRequest extends Error{
    constructor(body) {
        super();
        this.body = body;
    }
}

export { YandexMusicApi };
export { Captcha };
export { BadRequest };
