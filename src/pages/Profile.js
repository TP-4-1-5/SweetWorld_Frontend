import React, { useContext } from 'react';
import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { AuthContext } from "../context";
import Favorites from "../components/Favorites";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

const Profile = () => {
  const { isAuth, user } = useContext(AuthContext);

  if (!isAuth)
    return <Navigate to="/login" replace/>

  return (
    <Container className="p-5">
      <Row>
        <Col lg="6">
          <h4 className="mt-3 mb-3">Личный кабинет</h4>
          <Row className="mb-2">
            <Col lg="10">
              <Form.Group>
                <Form.Label>
                  Имя пользователя:
                </Form.Label>
                <Form.Control placeholder={user.username} disabled />
              </Form.Group>

            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <h4 className="mt-3 mb-3">Избранное</h4>
          <Favorites/>
          <Link to="/products" className="btn btn-success btn-lg w-100">
            Вернуться к каталогу
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;