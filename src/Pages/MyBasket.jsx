import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasketList from "../Components/Basket/BasketList";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import { clearBasket } from "../reduxStore/basket";

const MyBasket = () => {
  const basketItems = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [purchaseDetails, setPurchaseDetails] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    card: "",
    expireDate: "",
    cvc: "",
  });

  const [show, setShow] = useState(false);

  const register = () => {
    if (
      purchaseDetails.name != "" &&
      purchaseDetails.surname != "" &&
      purchaseDetails.email != "" &&
      purchaseDetails.address != "" &&
      purchaseDetails.card != "" &&
      purchaseDetails.expireDate != "" &&
      purchaseDetails.cvc != ""
    ) {
      setShow(false);
      dispatch(clearBasket());
      sendEmail(purchaseDetails.email, generateBody());
      alert("satın alma onaylandı");
      navigate("/");
    } else {
      alert("Boş alan bırakılamaz!");
    }
  };

  const sendEmail = (to, body) => {
    window.Email.send({
      SecureToken: "cc892906-4362-44ad-bc55-acd4e6d61278",
      To: to,
      From: "webprojed@gmail.com",
      Subject: "E-ticaret Projesi",
      Body: body,
    }).then((message) => alert(message));
  };

  const checkoutFunction = () => {
    if (basketItems.length > 0) {
      setShow(true);
    } else {
      alert("Buy something!");
      navigate("/");
    }
  };

  const calcPrice = () => {
    const totalPrice = basketItems.reduce(
      (sum, x) => sum + x.quantity * Number(x.product.price),
      0
    );
    return totalPrice;
  };

  const generateBody = () => {
    let body = "";

    body +=
      "Fatura Sahibi: " +
      purchaseDetails.name +
      " " +
      purchaseDetails.surname +
      "\n";

    body += "Adres: " + purchaseDetails.address;

    body += "\n\nUrunler:\n";

    basketItems.forEach((x) => {
      body +=
        x.quantity + " x " + x.product.name + ", " + x.product.price + "₺\n";
    });

    body += "\nToplam tutar: " + calcPrice() + "₺";

    return body;
  };

  return (
    <div
      style={{ marginTop: "100px", marginLeft: "60px", marginRight: "60px" }}
    >
      <h2>Toplam Tutar: {calcPrice()}₺</h2>
      <br />
      <Button variant="success" onClick={checkoutFunction}>
        Checkout
      </Button>
      <br />
      <br />

      <BasketList basketItems={basketItems} />

      <br />
      <RegisterForm
        purchaseDetails={purchaseDetails}
        setPurchaseDetails={setPurchaseDetails}
        totalPrice={calcPrice()}
        register={register}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default MyBasket;
