import React from 'react';
import { Card } from "react-bootstrap";

const TotalCostCard = ({ total }) => {
  return (
    <Card className="mb-3">
      <Card.Footer className="d-flex justify-content-between">
        <p className="float-left">Итого</p>
        <h4 className="float-right">{total} руб.</h4>
      </Card.Footer>
    </Card>
  );
};

export default TotalCostCard;