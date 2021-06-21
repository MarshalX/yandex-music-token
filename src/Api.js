/**
 * Reference: https://github.com/MarshalX/yandex-music-api/blob/952145c3b8431385f2fe8273d52d8eb4e49fcceb/yandex_music/client.py#L89
 */
class YandexMusicApi {
    oauth_url = 'https://oauth.yandex.com';
    client_id = '23cabbbdc6cd418abb4b39c32c41195d';
    client_secret = '53bc75238f0c4d08a118e51fe9203300';

    generate_token_by_username_and_password = async (username, password, x_captcha_answer, x_captcha_key) => {
        const url = `${this.oauth_url}/token`;

        let data = {
            grant_type: 'password',
            client_id: this.client_id,
            client_secret: this.client_secret,
            username: username,
            password: password
        };

        if (x_captcha_answer && x_captcha_key) {
            data = {...data, x_captcha_answer, x_captcha_key}
        }

        return await this.post(url, data)
            .then(resp => resp.json())
            .then(json => json['access_token']);
    };

    serialize = (obj) => {
        let str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };

    handleCaptcha = (errorMessage, json) => {
        if (errorMessage.includes('Wrong')) {
            throw new CaptchaWrong(json);
        } else {
            throw new CaptchaRequired(json);
        }
    };

    post = (url, data) => {
        return fetch(url, {
            method: 'POST',
            body: this.serialize(data)
        }).then(resp => {
            if (!resp.ok) {
                return resp.json().then(json => {
                    let message = json.error_description || 'Unknown HTTP Error';
                    if (message.includes('CAPTCHA')) {
                        return this.handleCaptcha(message, json);
                    } else {
                        throw new Error(message);
                    }
                });
            }
            return resp;
        });
    };
}

class CaptchaRequired extends Error {
    constructor(body) {
        super();
        this.body = body
    }
}

class CaptchaWrong extends Error {
    constructor(body) {
        super();
        this.body = body
    }
}

export {YandexMusicApi};
export {CaptchaRequired};
export {CaptchaWrong};
