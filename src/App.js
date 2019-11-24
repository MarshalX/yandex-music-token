import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label column={false}>Введите логин, почту или телефон:</Form.Label>
                        <Form.Control type="email" placeholder="Введите логин, почту или телефон"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column={false}>Введите пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" block>
                        Войти
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default App;
