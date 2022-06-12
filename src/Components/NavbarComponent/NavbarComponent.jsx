import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const basketItems = useSelector((state) => state.basket.basketItems);
  const navigate = useNavigate();

  return (
    <Navbar bg="light" className="fixed-top" expand="lg">
      <Container fluid>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          E-Ticaret
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Button
          onClick={() => navigate("/basket")}
          style={{ marginLeft: "15px" }}
          variant={basketItems.length > 0 ? "primary" : "outline-primary"}
        >
          {basketItems.length > 0 ? "Go Basket" : "Basket"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
