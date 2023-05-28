import React, { useEffect, useState } from 'react';
import ProductsContainer from "../components/ProductsContainer";
import { useFetching } from "../hooks/useFetching";
import ProductsService from "../services/ProductsService";
import { useParams } from "react-router";

const ProductsCategory = () => {
  const params = useParams();
  const id = params.id;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [count, setCount] = useState(0);

  const [fetchCategories, areCategoriesLoading] = useFetching(async () => {
    const response = await ProductsService.getAllCategories();
    setCategories(response.data.answer.filter(category => category.id == id));
  })

  const [fetchProducts, areProductsLoading] = useFetching(async (category_id) => {
    const response = await ProductsService.getProductsByCategory(category_id);
    setProducts(response.data.answer);
    setCount(Object.keys(response.data.answer).length);
  })

  useEffect(() => {
    fetchCategories();
    fetchProducts(id);
  }, [params.id]);

  return (
    <>
      <ProductsContainer products={products[curPage] || []}
                         carouselItems={categories}
                         setCurPage={setCurPage}
                         curPage={curPage}
                         category={categories}
                         count={count}
      />
    </>
  );
};

export default ProductsCategory;