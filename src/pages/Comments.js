import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AuthContext} from "../context";
import {useFetching} from "../hooks/useFetching";
import CommentsService from "../services/CommentsService";
import AddCommentForm from "../components/AddCommentForm/AddCommentForm";
import CommentsList from "../components/CommentsList";
import {useParams} from "react-router";
import ProductsService from "../services/ProductsService";

const Comments = () => {
    const {isAuth} = useContext(AuthContext);

    const {id} = useParams();

    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchProduct] = useFetching(async () => {
        const response = await ProductsService.getProductById(id);
        setProduct(response.data.answer);
    })

    const [fetchComments, isLoading] = useFetching(async () => {
        const response = await ProductsService.getProductComments(id);
        setComments(response.data.answer);
    });

    useEffect(() => {
        fetchComments();
        fetchProduct();
    }, []);

    return (
        <Container>
            <h2 className="text-center mt-5">Отзывы на товар {product.name}</h2>
            <Row className="mt-5">
                <Col lg={6} className="mb-3">
                    <Container className="d-flex justify-content-center">
                        <AddCommentForm fetch={fetchComments} product_id={id} product_name={product.name}/>
                    </Container>
                </Col>
                <Col lg={6}>
                    <CommentsList fetch={fetchComments} product_id={id} comments={comments}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Comments;