import React, { useEffect, useState } from 'react';
import { useFetching } from "../../hooks/useFetching";
import ProductsService from "../../services/ProductsService";
import { Card } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import "./FavoriteProductCard.css";

const FavoriteProductCard = ({ setTotal, fetch, username, id }) => {
  const [product, setProduct] = useState({});

  const [fetchProduct, isLoading] = useFetching(async () => {
    const response = await ProductsService.getProductById(id);
    setProduct(response.data.answer);
    setTotal(prev => prev + parseInt(response.data.answer.price));
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const remove = () => {
    ProductsService.removeFromFavorite(id, username)
      .then(res => {
        if (res.data.code === 200) {
          setTotal(prev => prev - product.price);
          fetch();
        }
      });
  }

  return (
    <>
      {
        !isLoading &&
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Card.Text>
              {product.price} руб.
            </Card.Text>
            <Card.Text>
              <BsTrash className="trash-icon" onClick={remove}/>
            </Card.Text>
          </Card.Footer>
        </Card>
      }
    </>
  );
};

export default FavoriteProductCard;