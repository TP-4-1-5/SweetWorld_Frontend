import React, { useContext, useState } from 'react';
import { Alert, Button, Card, Col } from "react-bootstrap";
import './ProductsCard.css';
import { API_URL } from "../../http";
import { AuthContext } from "../../context";
import AlertMessage from "../AlertMessage/AlertMessage";
import ProductsService from "../../services/ProductsService";
import { Link } from "react-router-dom";
import {sendMetric} from "../../utils/metric";

const ProductsCard = ({ product }) => {
  const { isAuth, user } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);

  const handleFavorite = e => {
    ProductsService.addToFavorite(product.id, user.username )
      .then(res => {
        if ((res.data.code) === 200) {
          setShow(true)

          setTimeout(() => {
            setShow(false);
          }, 2000);
        } else {
          setErrorShow(true)

          setTimeout(() => {
            setErrorShow(false);
          }, 2000);
        }
      })
  }

  return (
    <>
      <AlertMessage body={"Товар успешно добавлен в избранное"} show={show} variant="success"/>
      <AlertMessage body={"Произошла ошибка"} show={errorShow} variant="danger"/>

      <Col lg="4" md="6">
        <Card className="text-center h-100 align-items-center d-flex" id="product-card">
          <Card.Img variant="top" src={`${API_URL}media/${product.image}`}
                    alt={product.name}
          />

          <Card.Body>
            <Card.Title>
              <Link to={`/comments/${product.id}`}>{product.name}</Link>
            </Card.Title>
            <h5>{product.price}</h5>
            <h6>{product.description}</h6>
          </Card.Body>

          <Card.Footer>
            {
              isAuth
                  ?
              <Button variant="outline-success" className="mb-2"
                      onClick={() => handleFavorite()}
              >Добавить в избранное
              </Button>
                  :
              <Link onClick={() => {sendMetric('reachGoal','AddFavourite')}} to="/login" className="btn btn btn-outline-success mb-2"
              >Добавить в избранное
              </Link>
            }
            <Link className="btn btn-outline-success card-link" to={`/comments/${product.id}`}>Посмотреть отзывы</Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ProductsCard;