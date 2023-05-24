import React, { useEffect, useState } from 'react';
import { useFetching } from "../hooks/useFetching";
import ProductsService from "../services/ProductsService";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const [fetchCategories, isLoading] = useFetching(async () => {
    const response = await ProductsService.getAllCategories();
    setCategories(response.data.answer);
  })

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ListGroup className="mb-4">
      {
        !isLoading &&
        categories.map(category =>
          <ListGroup.Item key={category.id}>
            <Link to={`/categories/${category.id}/`}>
              {category.name}
            </Link>
          </ListGroup.Item>
        )
      }
    </ListGroup>
  );
};

export default CategoriesList;