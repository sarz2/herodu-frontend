import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        role="status"
        style={{
          margin: "auto",
          display: "block",
          width: "100px",
          height: "100px",
        }}
      ></Spinner>
      <span className="sr-only">Loading...</span>
    </>
  );
};

export default Loader;
