import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

import { listProducts } from "../redux/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Paginate from "../components/Paginate";
import "./Homepage.css";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  const { pageNumber } = useParams() || 1;
  const { keyword } = useParams();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Header />
      {!keyword && (
        <>
          <h1>Top Rated Products</h1>
          <ProductCarousel />
        </>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="homepage-container">
            {" "}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </Row>
        </>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
