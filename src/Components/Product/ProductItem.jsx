import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItemToBasket } from "../../reduxStore/basket";

const ProductItem = (props) => {
  const { product } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToBasketFunction = () => {
    dispatch(
      addItemToBasket({
        product: product,
      })
    );
    alert("Ürün sepetinize eklendi.");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="p-5" 
      variant="top" 
      src={product.image} 
      alt="Ürün resmi yok"
      onClick={() => navigate("/product/" + product.id)} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.price}₺
        </Card.Subtitle>
        <Card.Text>{product.detail.substring(0, 50) + "..."}</Card.Text>
        <Stack className="" direction="horizontal" gap={3}>
          <Button
            onClick={() => navigate("/product/" + product.id)}
            variant="primary"
          >
            Teknik Özellikler
          </Button>
          <Button onClick={addToBasketFunction} variant="success">
            +
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;