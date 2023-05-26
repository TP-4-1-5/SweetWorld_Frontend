import React from 'react';
import { Pagination } from "react-bootstrap";

const PageNavigator = ({count, curPage, setPage}) => {
  let items = [];
  for (let i = 1; i <= count; i++) {
    items.push(
      <Pagination.Item key={i} active={i === curPage} onClick={() => setPage(i)}>
        {i}
      </Pagination.Item>
    )
  }

  return (
    <Pagination className="justify-content-center mt-5">
      {items}
    </Pagination>
  );
};

export default PageNavigator;