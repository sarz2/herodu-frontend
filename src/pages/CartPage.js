import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Row, Col, ListGroup, Form, Button, Card } from "react-bootstrap";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartPage = () => {
  const [searchParams] = useSearchParams();
  const productId = useParams();

  const qty = searchParams.get("qty");

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId.id != undefined) {
      dispatch(addToCart(productId.id, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      <Header />
      <div>Cart</div>
      <Footer />
    </>
  );
};

export default CartPage;
