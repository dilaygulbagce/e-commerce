import React from "react";
import { Button, Card, Stack, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToBasket } from "../../reduxStore/basket";
import "./Product.css";

const ProductDetail = (props) => {
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
    <Card className="product-detail rounded">
      <Button
        style={{ width: "120px", margin: "15px" }}
        onClick={() => navigate("/")}
      >
        Geri Dön
      </Button>
      <Stack direction="horizontal" className="p-5" gap={3}>
        <img className="detail-image" src={product.image} alt="Ürün resmi yok"/>
        <Card.Body>
          <Stack
            direction="horizontal"
            className="product-detail-row-1"
            gap={3}
          >
            <Card.Title>{product.name}</Card.Title>

            <div style={{ textAlign: "center" }}>
              <Card.Title className="mb-2 text-muted">
                {product.price}₺
              </Card.Title>
              <Button onClick={addToBasketFunction} variant="success">
                Sepete Ekle
              </Button>
            </div>
          </Stack>
          <Card.Text>{product.detail}</Card.Text>
          <br />
          <br />
          <Card.Subtitle>Özellikler</Card.Subtitle>
          <br />
          <Table className="text-start" striped bordered hover>
            <tbody>
              {product.spesifications.map((x, index) => (
                <tr key={index}>
                  <td>{x.name}</td>
                  <td>{x.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Stack>
    </Card>
  );
};

export default ProductDetail;
