import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form} from 'react-bootstrap'


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

        console.log(url, data);

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

    post = (url, data) => {
        return fetch(url, {
            method: 'POST',
            body: this.serialize(data)
        }).then(resp => {
            if (!resp.ok) throw Error('Response is not ok :(');
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

        const {username, password} = this.state;
        this.api.generate_token_by_username_and_password(username, password).then(token => {
            alert(token);
        }).catch(error => {
            alert(`An error has occurred: ${error}`)
        })
    };

    render() {
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

                    <Button variant="primary" type="submit" block onClick={this.handleSubmit}>
                        Войти
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default App;
