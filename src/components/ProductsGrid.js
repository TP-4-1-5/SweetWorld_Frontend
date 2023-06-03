import React from 'react';
import { Row } from "react-bootstrap";
import ProductsCard from "./ProductsCard/ProductsCard";

const ProductsGrid = ({products}) => {
  return (
    <Row className="h-auto g-4">
      {
        products.map(product => <ProductsCard key={product.id} product={product}/> )
      }
    </Row>
  );
};

export default ProductsGrid;