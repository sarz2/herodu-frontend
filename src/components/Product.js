import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="card bg-dark mb-5">
      <a
        href={`product/${product._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <Card.Img
          className="card-img-top rounded"
          width={"100%"}
          height="200"
          src={product.image}
          variant="top"
        />
      </a>

      <Card.Body className="card-body">
        {" "}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a
              href={`product/${product._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </a>
          </li>
          <li className="list-group-item">
            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
          </li>
          <li className="list-group-item">
            <Card.Text as="h3">
              <div>{product.price}kr</div>
            </Card.Text>
          </li>
        </ul>
      </Card.Body>
    </div>
  );
};

export default Product;
