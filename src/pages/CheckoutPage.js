import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Col,
  Row,
  Form,
  Button,
  Card,
  ListGroup,
  Image,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "./CheckoutPage.css";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [purchased, setPurchased] = useState(false);
  const [adress, setAdress] = useState("");

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const submitHandler = () => {
    setPurchased(!purchased);
  };

  const removeHandler = () => {
    localStorage.removeItem("cartItems");
    navigate("/");
  };
  return (
    <>
      <Header />
      {!purchased ? (
        <Row>
          <Link to="/cart" className="btn btn-light my-3">
            Go Back
          </Link>
          <Col>
            <h1>Pay with invoice</h1>
            <Form
              style={{ width: "50%", margin: "auto" }}
              onSubmit={submitHandler}
            >
              <Form.Group controlId="adress">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter adress"
                  value={adress}
                  required
                  onChange={(e) => setAdress(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">
                Purchase
              </Button>
            </Form>
          </Col>
        </Row>
      ) : (
        <>
          <Link to="/cart" className="btn btn-light my-3">
            Go Back
          </Link>
          <h2>These products are on their way to you:</h2>
          <div className="checkout-container">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Col>
                  <strong>{item.name}</strong>
                </Col>
              </ListGroup.Item>
            ))}
            <h2>To this adress:</h2>
            <strong>{adress}</strong>
            <h2>The amount you will be charged:</h2>
            <strong>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              kr
            </strong>
            <Button type="button" onClick={removeHandler}>
              Yes, send it to me!
            </Button>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default CheckoutPage;
