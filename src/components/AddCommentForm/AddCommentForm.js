import React, { useContext, useState } from 'react';
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import "./AddCommentForm.css";
import CommentsService from "../../services/CommentsService";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";
import {sendMetric} from "../../utils/metric";

const AddCommentForm = ({fetch, product_id, product_name}) => {
    const { user, isAuth } = useContext(AuthContext);

    const [body, setBody] = useState("");

    const addComment = event => {
        event.preventDefault();

        CommentsService.addComment(product_name, user.username, body, product_id)
            .then(res => {
                if (res.data.code === 200) {
                    setBody("");
                    fetch();
                }
            })
    }

    return (
        <Card className="w-100">
            <Card.Header>
                <h4>Добавить отзыв</h4>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={addComment}>
                    <InputGroup>
                        <InputGroup.Text>
                            Отзыв:
                        </InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <Form.Group>
                        {
                            isAuth ?
                                <Button onClick={() => {sendMetric('reachGoal','AddComment')}} type="submit" variant="secondary" id="commentBtn" onClick={addComment}>
                                    Оставить комментарий
                                </Button>
                                : <Link to="/login" className="btn btn-secondary">Оставить комментарий</Link>
                        }

                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddCommentForm;