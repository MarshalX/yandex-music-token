import React, {Component} from 'react';
import {CardDeck, Col, Container, Image, Row} from 'react-bootstrap'
import AuthForm from "./AuthForm";
import TrustCard from "./TrustCard";

class Link extends Component {
    render() {
        const {children, text} = this.props;

        let content = text;
        if (!content) {
            content = children;
        }

        return <a href={this.props.url} target="_blank" rel="noreferrer">{content}</a>
    }
}

class App extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col className="d-none d-xl-block col-md-4"/>
                    <Col>
                        <Row className="d-flex justify-content-center">
                            <Image src="logo.png" width="30%" roundedCircle/>
                        </Row>
                        <Row className="d-flex justify-content-center px-5 text-center">
                            <p>Полноценный клиент сервиса Яндекс.Музыка в Telegram!</p>
                        </Row>
                        <AuthForm Link={Link}/>
                    </Col>
                    <Col className="d-none d-xl-block col-md-4"/>
                </Row>
                <Row className="mt-5">
                    <Container className="justify-content-center ">
                        <h2 className="text-center mb-3">Это безопасно потому что мы</h2>
                        <Row>
                            <CardDeck className="mx-0">
                                <TrustCard icon={['fab', 'yandex']} title="Отправляем напрямую"
                                           text="Данные отправляется сразу на сервера
                                           Яндекс без посредников"/>
                                <TrustCard icon={['fab', 'expeditedssl']} title="Используем HTTPS"
                                           text="Вся информация отправляется в зашифрованном виде"/>
                                <TrustCard icon="key" title="Не храним пароли"
                                           text="На наших серверах хранится только уникальный токен"/>
                                <TrustCard icon="code" title="Показываем код"
                                           text="Весь исходный код опубликован в репозитории на GitHub"/>
                                {/*<TrustCard icon="shield-alt" title="Официальное приложение"*/}
                                {/*           text="Авторизация происходит через OAuth приложение Яндекс используемое в их*/}
                                {/*           собственных клиентах"/>*/}
                                {/*<TrustCard icon="spinner" title="Выполнение в браузере"*/}
                                {/*           text="Процесс авторизации выполняется в браузере без возможности вмешательства*/}
                                {/*           со стороны сервера"/>*/}
                            </CardDeck>
                        </Row>
                    </Container>
                </Row>
                <hr/>
                <Row className="mb-3">
                    <Container>
                        <Row className="d-flex justify-content-between">
                            <Col xs={{span: "auto"}}>
                                <span>
                                    Исходный код: <Link text="yandex-music-token" url="https://github.com/MarshalX/yandex-music-token"/>
                                </span>
                            </Col>
                            <Col xs={{span: "auto"}} className="text-right">
                                <span>
                                    Автор: <Link text="@MarshalX" url="https://github.com/MarshalX/"/>
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default App;
