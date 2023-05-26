import React from 'react';
import ProductsHeader from "./ProductsHeader/ProductsHeader";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesList from "./CategoriesList";
import ProductsGrid from "./ProductsGrid";
import PageNavigator from "./PageNavigator";

const ProductsContainer = (props) => {
    const searchHandle = e => {
        props.fetch(props.name);
    }

    return (
        <Container>
            <ProductsHeader carouselItems={props.carouselItems}/>
            <Row>
                <Col lg="3" md="12">
                    <CategoriesList/>
                </Col>
                <Col lg="9">
                    {props.search &&
                        <Row className="mb-4 p-0">
                            <Col lg={10} className="d-flex align-items-center">
                                <input className="w-100 mb-2" placeholder="Название товара..." value={props.name}
                                       onChange={(e) => props.setName(e.target.value)}
                                />
                            </Col>
                            <Col lg={2} className="mb-2 d-flex align-items-center">
                                <button className="w-100 btn btn-success" onClick={searchHandle}>Поиск</button>
                            </Col>
                        </Row>
                    }
                    <ProductsGrid products={props.products}/>
                    <PageNavigator setPage={props.setCurPage} curPage={props.curPage} count={props.count}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsContainer;