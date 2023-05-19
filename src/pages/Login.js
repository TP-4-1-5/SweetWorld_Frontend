import React, { useContext, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { AuthContext } from "../context";
import { Link } from "react-router-dom";
import UsersService from "../services/UsersService";

const Login = () => {
  const { setIsAuth, setUser, user } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [serverError, setServerError] = useState("");

  const login = event => {
    event.preventDefault();

    UsersService.login(username, password)
      .then(res => {
        const data = res.data;
        if (data.code === 200) {
          const user = {
            "id": data.answer.id,
            "username": data.answer.username,
            "is_superuser": data.answer.is_superuser,
          };
          setUser(user);
          setIsAuth(true);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setServerError(data.answer)
        }
      })
  }

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center align-items-center h-25">
        <Col lg="5">
          <Card className="shadow-lg border-0 mt-5">
            <Card.Header>
              <h3 className="text-center font-weight-light my-4">Авторизация</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={login}>
                <InputGroup>
                  <InputGroup.Text>
                    Имя пользователя:
                  </InputGroup.Text>
                  <Form.Control
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text>
                    Пароль:
                  </InputGroup.Text>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                {serverError &&
                  <Alert variant="danger">
                    {serverError}
                  </Alert>
                }
                <Form.Group>
                  <Button className="w-100" type="submit" variant="dark" size="lg">Войти</Button>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer>
              <div className="small text-center">
                Нужен аккаунт? <Link to="/registration" className="text-black">Зарегистрируйся!</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;