import React from "react";
import { Button, Container, Stack, Table } from "react-bootstrap";
import "./Basket.css";
const BasketListItem = (props) => {
  const { quantity, product, addItem, popItem } = props;

  return (
    <tr>
      <td>
        <img className="basket-image" src={product.image} />
      </td>
      <td className="table-row-text">{product.name}</td>
      <td className="table-row-text">{quantity}</td>
      <td className="table-row-text">{product.price}</td>
      <td className="table-row-text">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="horizontal" gap={3}>
            <Button onClick={popItem} className="m-2" variant="danger">
              -
            </Button>
            <Button onClick={addItem} className="m-2" variant="success">
              +
            </Button>
          </Stack>
        </div>
      </td>
    </tr>
  );
};

export default BasketListItem;
