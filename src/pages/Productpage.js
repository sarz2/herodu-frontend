import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Productpage.css";
import Rating from "../components/Rating";
import { ListGroup, Image, Card, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const id = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, []);

  return (
    <>
      <div className="holder">
        <Header />
        <Link className="btn btn-light my-3" to="/">
          Go Back{" "}
        </Link>
        <div className="one-product-container">
          <Image
            className="product-img"
            src={product.image}
            alt={product.name}
          />
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
