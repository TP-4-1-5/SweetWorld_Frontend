import React, { useEffect, useState } from 'react';
import ProductsContainer from "../components/ProductsContainer";
import { useFetching } from "../hooks/useFetching";
import ProductsService from "../services/ProductsService";
import Footer from "../components/Footer/Footer";
import { Container } from "react-bootstrap";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [fetchCategories, areCategoriesLoading] = useFetching(async () => {
    const response = await ProductsService.getAllCategories();
    setCategories(response.data.answer);
  })

  const [fetchProducts, areProductsLoading] = useFetching(async (name) => {
    const response = await ProductsService.getProductsByName(name);
    setProducts(response.data.answer);
    setCount(Object.keys(response.data.answer).length);
  })

  useEffect(() => {
    fetchCategories();
    fetchProducts(name);
  }, []);

  return (
      <div className="min-vh-100 d-flex flex-column justify-content-between">
        <Container>
          <ProductsContainer products={products[curPage] || []}
                             carouselItems={categories}
                             setCurPage={setCurPage}
                             curPage={curPage}
                             count={count}
                             search={true}
                             name={name}
                             setName={setName}
                             fetch={fetchProducts}
          />
        </Container>

        <Footer/>
      </div>
  );
};

export default Products;