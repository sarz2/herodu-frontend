import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Product.css";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="card bg-dark mb-5">
      <a
        href={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <Card.Img
          className="card-img-top rounded"
          width={"100%"}
          height="200"
          src={process.env.PUBLIC_URL + product.image}
          variant="top"
        />
      </a>

      <Card.Body className="card-body">
        {" "}
        <ListGroup variant="flush">
          <ListGroup.Item>
            <a
              href={`product/${product._id}`}
              style={{ textDecoration: "none", color: "black" }}
              className="bg-primary"
            >
              <Card.Title as="h5">
                <strong>{product.name}</strong>
              </Card.Title>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text as="h3">
              <div>{product.price}kr</div>
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </div>
  );
};

export default Product;
