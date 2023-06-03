import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark mt-4 py-3">
      <Container>
        <Row sm={1} md={2} lg={3} className="d-flex justify-content-between">
          <Col lg="3" className="d-flex flex-column footer-links mb-2">
            <Link className="m-0 text-white" to="/"> Главная страница</Link>
            <Link className="m-0 text-white" to="/products"> Каталог товаров</Link>
            <Link className="m-0 text-white" to="/account"> Личный кабинет</Link>
          </Col>
          <Col lg="3" sm="5" className="devops-block mb-2">
            <p className="m-0 text-white title">Разработчики: </p>
            <p className="m-0 text-white">Агабабян Давид</p>
            <p className="m-0 text-white">Гранкина Ангелина</p>
          </Col>
          <Col lg="3" sm="5" className="devops-block mb-2">
            <p className="m-0 text-white title">Контакты:</p>
            <p className="m-0 text-white">bane01@mail.ru</p>
            <p className="m-0 text-white">anggrankn@gmail.com</p>
          </Col>
        </Row>
        <p className="m-0 text-center copyright">Все права защищены &copy;</p>
      </Container>
    </footer>
  );
};

export default Footer;