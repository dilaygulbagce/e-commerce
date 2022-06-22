import React from "react";
import { Button, Modal, Form, Stack } from "react-bootstrap";

const RegisterForm = (props) => {
  const {totalPrice, show, setShow, register, purchaseDetails, setPurchaseDetails} = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Üye Ol & Satın Al</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <h5>Kullanıcı Bilgileri</h5>
          <Stack direction="horizontal" gap={3}>
            <Form.Group className="mb-3 ">
              <Form.Label>Ad</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setPurchaseDetails({
                    ...purchaseDetails,
                    name: e.target.value,
                  })
                }
                defaultValue={purchaseDetails.name}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Soyad</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setPurchaseDetails({
                    ...purchaseDetails,
                    surname: e.target.value,
                  })
                }
                defaultValue={purchaseDetails.surname}
                type="text"
              />
            </Form.Group>
          </Stack>
          <Form.Group className="mb-3 ">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              onChange={(e) =>
                setPurchaseDetails({
                  ...purchaseDetails,
                  email: e.target.value,
                })
              }
              defaultValue={purchaseDetails.email}
              type="email"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Adres</Form.Label>
            <Form.Control
              onChange={(e) =>
                setPurchaseDetails({
                  ...purchaseDetails,
                  address: e.target.value,
                })
              }
              defaultValue={purchaseDetails.address}
              type="text"
            />
          </Form.Group>
          <br />
          <hr></hr>
          <h5>Ödeme Bilgileri</h5>

          <Form.Group className="mb-3 ">
            <Form.Label>Kart Numarası</Form.Label>
            <Form.Control
              onChange={(e) =>
                setPurchaseDetails({
                  ...purchaseDetails,
                  card: e.target.value,
                })
              }
              type="text"
            />
          </Form.Group>
          <Stack direction="horizontal" gap={3}>
            <Form.Group className="mb-3 ">
              <Form.Label>Son Kullanım Tarihi</Form.Label>
              <Form.Control
                placeholder="AA/YY"
                onChange={(e) =>
                  setPurchaseDetails({
                    ...purchaseDetails,
                    expireDate: e.target.value,
                  })
                }
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setPurchaseDetails({
                    ...purchaseDetails,
                    cvc: e.target.value,
                  })
                }
                type="number"
              />
            </Form.Group>
          </Stack>
        </Form>
        <br />
        <hr></hr>
        <h3>Toplam Tutar: {totalPrice}₺</h3>
      </Modal.Body>
      <Modal.Footer>
        <Stack direction="horizontal" gap={3}>
          <Button variant="danger" onClick={() => setShow(false)}>
            İptal
          </Button>
          <Button variant="primary" onClick={register}>
            Satın Al
          </Button>
        </Stack>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterForm;
