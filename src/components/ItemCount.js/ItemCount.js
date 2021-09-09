import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(1);
  stock = 5;
  initial = 1;
  const incrementOption = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementOption = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Card style={{ width: "10rem" }}>
        <Card.Title className="text-center">{counter}</Card.Title>
        <Card.Body className="d-flex justify-content-between">
          <Button variant="primary" onClick={incrementOption}>
            +
          </Button>
          <Button variant="primary" onClick={decrementOption}>
            -
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
