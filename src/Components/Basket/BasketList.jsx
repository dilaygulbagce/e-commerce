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
      {basketItems.length === 0 ? (
        <h5>Sepetiniz Boş!</h5>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ürün Resmi</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Tutar</th>
              <th>Seçenekler</th>
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
