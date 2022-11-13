import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Header />
      <Row className="width">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go back</Link>
          </Message>
        ) : (
          <ListGroup
            variant="flush"
            className="bg-primary"
            style={{ borderRadius: "10px", border: "1px solid black" }}
          >
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row className="cart">
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>
                      <h3 className="product-name">{item.name}</h3>
                    </Link>
                  </Col>
                  <Col md={2}>
                    <h3 className="product-name">{item.price}kr</h3>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      aria-label="remove from button"
                      type="button"
                      variant="danger"
                      style={{ border: "1px solid black" }}
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <FaTrash style={{ color: "red" }} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        {cartItems.length !== 0 && (
          <div className="width">
            <Col md={6}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListGroup.Item>
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                </ListGroup.Item>

                <ListGroup.Item>
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                  kr
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    aria-label="proceed to checkout"
                    type="button"
                    className="btn-block"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to checkout
                  </Button>
                </ListGroup.Item>
              </Card>
            </Col>
          </div>
        )}
      </Row>
      <Footer />
    </>
  );
};

export default CartPage;
