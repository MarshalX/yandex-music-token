import React, {Component} from 'react';
import {Badge, CardDeck, Col, Container, Image, Row} from 'react-bootstrap'
import AuthForm from "./AuthForm";
import TrustCard from "./TrustCard";

class App extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col className="d-none d-xl-block col-md-3"/>
                    <Col>
                        <Row>
                            <Container>
                                <h4>Яндекс.Музыка - Telegram <Badge variant="primary">Bot</Badge></h4>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <Image src="logo.png" width="100%" roundedCircle/>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <p>Данный бот позволяет прослушивать плейлист дня и другие умные плейлисты, Ваши личные
                                    плейлисты, а так же понравившиеся треки. Вы можете лайкать и дизлайкать треки,
                                    получать текст песен, искать новые музыкальные предпочтения, делиться ими со всеми и
                                    слушать любимую музыку в мессенджере Telegram.</p>
                                <p>
                                    Trello для вопросов и предложений:
                                    <a href="https://trello.com/b/D5f3kRxF"> Yandex.Music Telegram Bot</a></p>
                                <p>Канал с обновлениями и новостями:
                                    <a href="tg://resolve?domain=music_yandex_channel"> @music_yandex_channel</a></p>
                            </Container>
                        </Row>
                    </Col>
                    <Col className="d-none d-xl-block col-md-3"/>
                </Row>
                <Row>
                    <Col className="d-none d-xl-block col-md-3"/>
                    <Col>
                        <AuthForm/>
                    </Col>
                    <Col className="d-none d-xl-block col-md-3"/>
                </Row>
                <Row className="mt-5">
                    <Container className="justify-content-center ">
                        <h2 className="text-center mb-3">Причины, по которым нам стоит доверять</h2>
                        <Row>
                            <CardDeck>
                                <TrustCard icon={['fab', 'yandex']} title="Напрямую в Яндекс!"
                                           text="Ваш логин и пароль отправляется с Вашего компьютера сразу на сервера
                                           Яндекса без каких-либо посредников."/>
                                <TrustCard icon={['fab', 'expeditedssl']} title="Используем безопасное соединение!"
                                           text="Все ваши данные отправляются в зашифрованном виде через протокол HTTPS."/>
                                <TrustCard icon="key" title="Не храним ваши пароли!"
                                           text="На наших серверах хранится только Ваш уникальный токен,
                                           полученный при авторизации."/>
                            </CardDeck>
                            <CardDeck>
                                <TrustCard icon="code" title="Открытый исходный код!"
                                           text="Весь исходный код опубликован в репозитории на GitHub и доступен для
                                            просмотра."/>
                                <TrustCard icon="shield-alt" title="Только официальное приложение!"
                                           text="Авторизация происходит через OAuth приложение Яндекса используемое в их
                                           клиентах."/>
                                <TrustCard icon="spinner" title="Выполнение в браузере!"
                                           text="Весь код выполняется в Вашем браузере без возможности вмешательства с
                                           чьей-либо стороны."/>
                            </CardDeck>
                        </Row>
                    </Container>
                </Row>
                <hr/>
                <Row className="mb-3">
                    <Container>
                        <Row className="d-flex justify-content-between">
                            <Col>
                                <span>Исходный код: <a
                                    href="https://github.com/MarshalX/yandex-music-token">yandex-music-token</a></span>
                            </Col>
                            <Col className="text-right">
                                <span> Автор: <a href="tg://resolve?domain=MarshalX">@MarshalX</a></span>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default App;
