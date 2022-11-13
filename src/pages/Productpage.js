import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ListGroup,
  Image,
  Card,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  listProductDetails,
  createProductReview,
} from "../redux/actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/constants/productConstants";
import { addToCart } from "../redux/actions/cartActions";
import "./Productpage.css";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const id = useParams();

  const productId = id.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { success: successProductReview, error: errorProductReview } =
    productCreateReview;

  useEffect(() => {
    if (successProductReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successProductReview, rating, cartItems, message]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, quantity));
    setMessage("Added to cart!");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };

  return (
    <>
      <div className="holder">
        <Header />
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Link className="btn go-back-link" to="/">
              Go Back{" "}
            </Link>
            <div className="one-product-container">
              <Image
                className="product-img"
                src={product.image}
                alt={product.name}
              />
              <Row>
                <Col className="product-description-container">
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
                    <ListGroup.Item>Price: {product.price}kr</ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4} style={{ marginTop: "30px" }}>
                  {message && <Message>{message}</Message>}
                  <Card>
                    <ListGroup variant="flush" className="bg-primary">
                      <ListGroup.Item>
                        <Row>
                          <Col className="product-name">Price:</Col>
                          <Col>
                            <strong className="product-name">
                              {product.price}kr
                            </strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col className="product-name">Status:</Col>
                          <Col className="product-name">
                            {product.countInStock > 0
                              ? "In Stock"
                              : "Out Of Stock"}
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      {product.countInStock > 0 && (
                        <ListGroup.Item>
                          <Row>
                            <Col className="product-name">Qantity</Col>
                            <Col>
                              <Form.Control
                                as="select"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}
                      <ListGroup.Item
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          onClick={addToCartHandler}
                          className="btn-block"
                          type="button"
                          disabled={product.countInStock === 0}
                        >
                          Add to cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row>
                <h2>Reviews</h2>
                {product.reviews.length === 0 ? (
                  <>
                    <Message>No reviews</Message>
                    <ListGroup.Item>
                      <h2>Write a Customer Review</h2>
                      {errorProductReview && (
                        <Message variant="danger">{errorProductReview}</Message>
                      )}
                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                              as="select"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Excellent</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                              as="textarea"
                              row="3"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                          <Button type="submit" variant="primary">
                            Submit
                          </Button>
                        </Form>
                      ) : (
                        <Message>
                          Please <Link to="/login">sign in</Link> to write a
                          review{" "}
                        </Message>
                      )}
                    </ListGroup.Item>
                  </>
                ) : (
                  <>
                    <ListGroup style={{ marginBottom: "2rem" }} variant="flush">
                      {product.reviews.map((review) => (
                        <ListGroup.Item key={review._id}>
                          <strong>{review.name}</strong>
                          <Rating value={review.rating} />
                          <p>{review.createdAt.substring(0, 10)}</p>
                          <p>{review.comment}</p>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <ListGroup>
                      <ListGroup.Item>
                        <h2>Write a Customer Review</h2>
                        {errorProductReview && (
                          <Message variant="danger">
                            {errorProductReview}
                          </Message>
                        )}
                        {userInfo ? (
                          <Form onSubmit={submitHandler}>
                            <Form.Group controlId="rating">
                              <Form.Label>Rating</Form.Label>
                              <Form.Control
                                as="select"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                              >
                                <option value="">Select...</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="comment">
                              <Form.Label>Comment</Form.Label>
                              <Form.Control
                                as="textarea"
                                row="3"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="primary">
                              Submit
                            </Button>
                          </Form>
                        ) : (
                          <Message>
                            Please <Link to="/login">sign in</Link> to write a
                            review{" "}
                          </Message>
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </>
                )}
              </Row>
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
