import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Homepage.css";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import products from "../product";

const HomePage = () => {
  return (
    <>
      <Header />
      <Row className="homepage-container">
        {" "}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>

      <Footer />
    </>
  );
};

export default HomePage;
