import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Button, Container, Form, InputGroup} from 'react-bootstrap'


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

/**
 * Reference: https://github.com/MarshalX/yandex-music-api/blob/952145c3b8431385f2fe8273d52d8eb4e49fcceb/yandex_music/client.py#L89
 */
class YandexMusicApi {
    oauth_url = 'https://oauth.yandex.ru';
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

class App extends Component {

    api = new YandexMusicApi();

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({...this.state, [name]: value})
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            ...this.state,
            x_captcha_url: undefined,
            x_captcha_key: undefined
        });

        const {username, password, x_captcha_answer, x_captcha_key} = this.state;
        this.api.generate_token_by_username_and_password(username, password, x_captcha_answer, x_captcha_key).then(token => {
            alert(token);
        }).catch(error => {
            if (error instanceof CaptchaRequired || error instanceof CaptchaWrong) {
                const {x_captcha_url, x_captcha_key} = error.body;
                this.setState({
                    ...this.state,
                    x_captcha_url,
                    x_captcha_key
                })
            } else {
                alert(`An error has occurred: ${error}`)
            }
        })
    };

    render() {
        const {x_captcha_url} = this.state;
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label column={false}>Введите логин, почту или телефон:</Form.Label>
                        <Form.Control name="username" onChange={this.handleChange}
                                      type="email" placeholder="Введите логин, почту или телефон"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column={false}>Введите пароль</Form.Label>
                        <Form.Control name="password" onChange={this.handleChange}
                                      type="password" placeholder="Введите пароль"/>
                    </Form.Group>

                    {x_captcha_url &&
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Image fluid src={x_captcha_url}/>
                        </InputGroup.Prepend>
                        <Form.Control name="x_captcha_answer" onChange={this.handleChange} as="textarea"
                                     type="plain" placeholder="Введите капчу"/>
                        <InputGroup.Append>
                            <Button type="submit" onClick={this.handleSubmit}>
                                Обновить
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    }

                    <Button variant="primary" type="submit" block onClick={this.handleSubmit}>
                        Войти
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default App;
