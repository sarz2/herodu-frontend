import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, Link } from "react-router-dom";
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
import { addToCart } from "../actions/cartActions";

const CartPage = () => {
  const [searchParams] = useSearchParams();
  const productId = useParams();

  const qty = searchParams.get("qty");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId.id != undefined) {
      dispatch(addToCart(productId.id, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    console.log("remove");
  };

  return (
    <>
      <Header />
      <Row className="width">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems === null ? (
            <Message>
              Your cart is empty <Link to="/">Go back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.quantity}
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
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
      <Footer />
    </>
  );
};

export default CartPage;
