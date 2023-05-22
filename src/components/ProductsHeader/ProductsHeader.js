import React from 'react';
import { Col, Row } from "react-bootstrap";
import CompaniesCarousel from "../CompaniesCarousel/CompaniesCarousel";
import "./ProductsHeader.css";

const ProductsHeader = ({carouselItems}) => {
  return (
    <Row className="header-row h-auto my-4">
      <Col lg="6" className="d-flex flex-column justify-content-center">
        <h1 className="my-4">Каталог продукции лучших кондитерских фабрик</h1>
      </Col>
      <Col lg="6">
        <CompaniesCarousel items={carouselItems}/>
      </Col>
    </Row>
  );
};

export default ProductsHeader;