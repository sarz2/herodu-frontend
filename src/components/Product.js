import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a
        href={`product/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <Card.Img className="product-image" src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a
          href={`product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">
          <div>{product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
