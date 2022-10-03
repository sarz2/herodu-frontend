import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    {
      name: "world of warcraft",
      price: "399kr",
      image:
        "https://media.istockphoto.com/photos/site-blizzard-picture-id458654879",
      id: 1,
    },
    {
      name: "valyrant",
      price: "399kr",
      image:
        "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?cs=srgb&dl=pexels-pixabay-163036.jpg&fm=jpg",
      id: 2,
    },
    {
      name: "ps5 controller",
      price: "499kr",
      image:
        "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?cs=srgb&dl=pexels-cottonbro-3945659.jpg&fm=jpg",
      id: 3,
    },
    {
      name: " nintendo switch",
      price: "1599kr",
      image:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?cs=srgb&dl=pexels-pixabay-371924.jpg&fm=jpg",
      id: 4,
    },
    {
      name: "chess",
      price: "129kr",
      image:
        "https://images.pexels.com/photos/1152662/pexels-photo-1152662.jpeg?cs=srgb&dl=pexels-ylanite-koppens-1152662.jpg&fm=jpg",
      id: 5,
    },
    {
      name: "monopoly",
      price: "239kr",
      image:
        "https://images.pexels.com/photos/1329644/pexels-photo-1329644.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1329644.jpg&fm=jpg",
      id: 6,
    },
  ];

  const renderedProducts = products.map((product, index) => {
    return (
      <Link
        to={`product/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card" key={index}>
          <div className="product-container">
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <div className="holder">
        <Header />
        <div className="homepage-container">{renderedProducts}</div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
