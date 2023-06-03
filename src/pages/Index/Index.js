import React from 'react';
import './Index.css';
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div id="background-container">
      <Container id="index-container">
        <Col lg="6">
          <h1>Лучшие кондитерские изделия России</h1>
          <p>
            Собрана актуальная продукция от ведущих производителей страны,
            которые популярны и любимы даже за рубежом.
          </p>
          <button id="start-purchase-btn" type="button" className="btn btn-lg">
            <Link id="start-purchase-link" to="/products">
              Узнать подробнее
            </Link>
          </button>
        </Col>
      </Container>
    </div>
  );
};

export default Index;