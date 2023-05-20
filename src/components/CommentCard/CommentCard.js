import React, {useContext, useEffect, useState} from 'react';
import { Card } from "react-bootstrap";
import "./CommentCard.css";
import { AuthContext } from "../../context";
import { CiCircleRemove } from "react-icons/ci";
import CommentsService from "../../services/CommentsService";
import {useFetching} from "../../hooks/useFetching";

const CommentCard = ({ id, product_id, fetch }) => {
  const { user } = useContext(AuthContext);

  const [comment, setComment] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);

  const [fetchComment, isLoading] = useFetching(async () => {
      const response = await CommentsService.getComment(id);
      setComment(response.data.answer);
  })

    useEffect(() => {
        fetchComment();
    }, []);

  const remove = (id) => {
    setIsDeleting(true);
    CommentsService.removeComment(id, product_id)
      .then(res => {
        if (res.data.code === 200) {
          fetch();
        }
        setIsDeleting(false);
      })
  }

  if (comment.length === 0)
      return <></>;

  return (
    <Card className="comment mb-3">
      <Card.Header>
        {comment.username} на продукт {comment.product}
        { user.username === comment.username &&
          !isDeleting &&
            <CiCircleRemove size={20} className="remove-icon" onClick={() => remove(comment.id)}/>
          }
      </Card.Header>
      <Card.Body>
        {comment.description}
      </Card.Body>
    </Card>
  );
};

export default CommentCard;