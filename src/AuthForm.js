import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import React from 'react';
import { Captcha, YandexMusicApi } from './Api';


class AuthForm extends React.Component {
    api = new YandexMusicApi();
    mirror = 'https://t.me/';

    constructor(props) {
        super(props);
        this.state = {
            track_id: null,
            login: '',
            password: '',
            error: null,
            token: null
        };
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({...this.state, [name]: value, error: null})
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            ...this.state,
            captcha_image: undefined,
        });

        const {track_id, login, password, captcha_answer} = this.state;

        if (!login || !password) {
            return this.setState({
                ...this.state,
                error: 'Вы забыли ввести логин или пароль',
            })
        }

        this.api.generate_token_by_login_and_password(login, password, track_id, captcha_answer).then(token => {
            window.location.href = `tg://resolve?domain=music_yandex_bot&start=${token}`;
            this.setState({...this.state, token: token})
        }).catch(error => {
            if (error instanceof Captcha) {
                const {captcha_image_url, track_id} = error.body;
                this.setState({
                    ...this.state,
                    captcha_image_url: captcha_image_url,
                    track_id: track_id,
                    error: 'Необходимо пройти капчу',
                })
            } else {
                this.setState({
                    ...this.state,
                    error: error.body,
                });
            }
        })
    };

    render() {
        const {captcha_image_url, error, token} = this.state;
        return token ? (
            <>
                <a href={`tg://resolve?domain=music_yandex_bot&start=${token}`}>
                    <Button variant="primary" block>
                        Перейти в бота
                    </Button>
                </a>
                <small className="text-muted ">Если кнопка не работает -
                    <a href={`${this.mirror}music_yandex_bot?start=${token}`}> перейдите по ссылке</a>
                </small>
            </>
        ) : (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label column={false}>Введите логин, почту или телефон:</Form.Label>
                    <Form.Control name="login" onChange={this.handleChange}
                                  type="email" placeholder="Введите логин, почту или телефон"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label column={false}>Введите пароль</Form.Label>
                    <Form.Control name="password" onChange={this.handleChange}
                                  type="password" placeholder="Введите пароль"/>
                </Form.Group>

                {captcha_image_url &&
                <Form.Group controlId="formBasicCaptcha">
                    <Row className="mb-2">
                        <Col><Image fluid src={captcha_image_url}/></Col>
                        <Col className="align-self-center">
                            <Button className="btn-block" type="submit" onClick={this.handleSubmit}>
                                Обновить
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name="captcha_answer" onChange={this.handleChange}
                                          type="text" placeholder="Введите код с картинки"/>
                        </Col>
                    </Row>
                </Form.Group>
                }

                <Button variant="primary" type="submit" block onClick={this.handleSubmit}>
                    Войти
                </Button>

                {error &&
                <p className="mt-1 text-danger">{`${error}`}</p>
                }
            </Form>
        );
    }
}

export default AuthForm;
