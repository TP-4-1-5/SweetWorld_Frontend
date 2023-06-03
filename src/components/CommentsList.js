import React from 'react';
import CommentCard from "./CommentCard/CommentCard";
import { Container } from "react-bootstrap";
import { nanoid } from 'nanoid';

const CommentsList = ({ product_id, comments, fetch }) => {
  if (comments.length === 0) {
    return <h5>Отзывов еще нет</h5>
  }

  return (
    <Container>
      <h5 className="mb-3">Список отзывов:</h5>
      {
        comments.map(comment => <CommentCard key={nanoid()}
                                             fetch={fetch} id={comment} product_id={product_id}/>)
      }
    </Container>
  );
};

export default CommentsList;