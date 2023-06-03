import React, { useContext, useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "../static/css/form.css";
import { AuthContext } from "../context";
import { Link } from "react-router-dom";
import UsersService from "../services/UsersService";

const Registration = () => {
  const { setUser, setIsAuth } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatePassword] = useState("");

  const [pasError, setPasError] = useState("");
  const [serverError, setServerError] = useState("");

  const register = event => {
    event.preventDefault();
    setPasError("");
    if (password !== repeatPassword) {
      setPasError("Пароли не совпадают");
      return;
    }

    UsersService.registration(username, password)
      .then(res => {
        const code = res.data.code;
        if (code === 200) {
          setIsAuth(true);
          const user = {
            "id": res.data.id,
            "username": res.data.username,
          };
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setServerError(res.data.answer);
        }
      });
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center h-25">
        <Col lg="5">
          <Card className="shadow-lg border-0 mt-5">
            <Card.Header>
              <h3 className="text-center font-weight-light my-4">Создать аккаунт</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={register}>
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
                <InputGroup>
                  <InputGroup.Text>
                    Повторите пароль:
                  </InputGroup.Text>
                  <Form.Control
                    value={repeatPassword}
                    onChange={(e) => setRepeatePassword(e.target.value)}
                    type="password"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                {pasError &&
                  <Alert variant="danger">
                    {pasError}
                  </Alert>
                }
                {serverError &&
                  <Alert variant="danger">
                    {serverError}
                  </Alert>
                }
                <Form.Group>
                  <Button className="w-100" type="submit" variant="dark" size="lg">Создать аккаунт</Button>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <div className="small text-center">
                Уже есть аккаунт? <Link to="/login" className="text-black">Авторизоваться</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;