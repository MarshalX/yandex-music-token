import {Button, Col, Form, Image, Row} from 'react-bootstrap';
import React from 'react';
import {CaptchaRequired, CaptchaWrong, YandexMusicApi} from './Api';


class AuthForm extends React.Component {
  api = new YandexMusicApi();

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
      token: null
    };
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({...this.state, [name]: value, error: null});
  };

  handleCopyClick = (event) => {
    event.preventDefault();

    if (!navigator.clipboard) {
      return;
    }

    navigator.clipboard.writeText(this.state.token);
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      x_captcha_url: undefined,
      x_captcha_key: undefined
    });

    const {username, password, x_captcha_answer, x_captcha_key} = this.state;
    this.api.generate_token_by_username_and_password(username, password, x_captcha_answer, x_captcha_key).then(token => {
      window.location.href = `tg://resolve?domain=music_yandex_bot&start=${token}`;
      this.setState({...this.state, token: token});
    }).catch(error => {
      if (error instanceof CaptchaRequired || error instanceof CaptchaWrong) {
        const {x_captcha_url, x_captcha_key, error_description} = error.body;
        this.setState({
          ...this.state,
          x_captcha_url,
          x_captcha_key,
          error: error_description
        });
      } else {
        this.setState({
          ...this.state,
          error
        });
      }
    });
  };

  render() {
    const {Link} = this.props;
    const {x_captcha_url, error, token} = this.state;
    return token ? (
      <>
        <a href={`https://t.me/music_yandex_bot?start=${token}`}>
          <Button variant="primary" block>
            Перейти в бота
          </Button>
        </a>
        <a href="#" onClick={this.handleCopyClick}>Скопировать токен</a>
      </>
    ) : (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control name="username" onChange={this.handleChange}
                        type="email" placeholder="Логин или email"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control name="password" onChange={this.handleChange}
                        type="password" placeholder="Введите пароль"/>
          <Link url="https://passport.yandex.ru/auth/restore/" text="Не помню"/>
        </Form.Group>

        {x_captcha_url &&
          <Form.Group controlId="formBasicCaptcha">
            <Row className="mb-2">
              <Col><Image fluid src={x_captcha_url}/></Col>
              <Col className="align-self-center">
                <Button className="btn-block" type="submit" onClick={this.handleSubmit}>
                  Обновить
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control name="x_captcha_answer" onChange={this.handleChange}
                              type="text" placeholder="Введите код с картинки"/>
              </Col>
            </Row>
          </Form.Group>
        }

        {error && <>
          <p className="mt-1 text-danger">{`${error}`}</p>
          <p className="mt-1 text-info">
            Если вы всречаетесь с ошибкой о неправильном пароле, но уверены, что пароль верный, воспользуйтесь для
            авторизации <a href="https://github.com/MarshalX/yandex-music-token/releases">этим Android
            приложением.</a>
            <br/>
            <br/>
            Для iOS есть только возможность попробовать исправить ошибку следуя шагам из <a href="https://t.me/music_yandex_channel/92">инструкции</a>.
          </p>
        </>
        }

        <Button variant="primary" type="submit" block onClick={this.handleSubmit} className="mb-1">
          Войти
        </Button>
        <Link url="https://passport.yandex.ru/registration">
          <Button variant="outline-primary" block>
            Создать ID
          </Button>
        </Link>
      </Form>
    );
  }
}

export default AuthForm;
