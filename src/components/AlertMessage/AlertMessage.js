import React from 'react';
import { Alert } from "react-bootstrap";
import "./AlertMessage.css"

const AlertMessage = ({show, body, variant}) => {
  return (
    <Alert show={show} variant={variant} id="success-msg">
      <Alert.Heading>{body}</Alert.Heading>
    </Alert>
  );
};

export default AlertMessage;