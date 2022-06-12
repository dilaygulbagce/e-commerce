import React from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItemToBasket, removeFromBasket } from "../../reduxStore/basket";
import BasketListItem from "./BasketListItem";

const BasketList = (props) => {
  const { basketItems } = props;

  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(
      addItemToBasket({
        product: product,
      })
    );
  };

  const popItem = (product) => {
    dispatch(
      removeFromBasket({
        product: product,
      })
    );
  };

  return (
    <Container>
      {basketItems.length == 0 ? (
        <h5 style={{ color: "red" }}>Basket is empty!</h5>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((x) => (
              <BasketListItem
                addItem={() => addItem(x.product)}
                popItem={() => popItem(x.product)}
                key={x.product.id}
                product={x.product}
                quantity={x.quantity}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default BasketList;
