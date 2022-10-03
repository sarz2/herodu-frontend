import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Productpage.css";

const ProductPage = () => {
  const products = [
    {
      name: "world of warcraft",
      price: "399kr",
      image:
        "https://media.istockphoto.com/photos/site-blizzard-picture-id458654879",
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc varius, vulputate eros vel, feugiat nunc. Donec eu ex laoreet, tincidunt nisl et, facilisis orci. Suspendisse condimentum risus non orci mattis tincidunt. Nullam ut suscipit erat. Etiam vitae massa ut ipsum convallis tempor eget id augue. Sed at euismod arcu, ut tempor nunc. Suspendisse tristique auctor lacus, at sodales lorem accumsan id. Suspendisse tempus, quam id consequat rutrum, odio lectus sollicitudin massa, nec vulputate libero quam non arcu.",
    },
    {
      name: "valyrant",
      price: "399kr",
      image:
        "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?cs=srgb&dl=pexels-pixabay-163036.jpg&fm=jpg",
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc varius, vulputate eros vel, feugiat nunc. Donec eu ex laoreet, tincidunt nisl et, facilisis orci. Suspendisse condimentum risus non orci mattis tincidunt. Nullam ut suscipit erat. Etiam vitae massa ut ipsum convallis tempor eget id augue. Sed at euismod arcu, ut tempor nunc. Suspendisse tristique auctor lacus, at sodales lorem accumsan id. Suspendisse tempus, quam id consequat rutrum, odio lectus sollicitudin massa, nec vulputate libero quam non arcu.",
    },
    {
      name: "ps5 controller",
      price: "499kr",
      image:
        "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?cs=srgb&dl=pexels-cottonbro-3945659.jpg&fm=jpg",
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc varius, vulputate eros vel, feugiat nunc. Donec eu ex laoreet, tincidunt nisl et, facilisis orci. Suspendisse condimentum risus non orci mattis tincidunt. Nullam ut suscipit erat. Etiam vitae massa ut ipsum convallis tempor eget id augue. Sed at euismod arcu, ut tempor nunc. Suspendisse tristique auctor lacus, at sodales lorem accumsan id. Suspendisse tempus, quam id consequat rutrum, odio lectus sollicitudin massa, nec vulputate libero quam non arcu.",
    },
    {
      name: " nintendo switch",
      price: "1599kr",
      image:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?cs=srgb&dl=pexels-pixabay-371924.jpg&fm=jpg",
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc varius, vulputate eros vel, feugiat nunc. Donec eu ex laoreet, tincidunt nisl et, facilisis orci. Suspendisse condimentum risus non orci mattis tincidunt. Nullam ut suscipit erat. Etiam vitae massa ut ipsum convallis tempor eget id augue. Sed at euismod arcu, ut tempor nunc. Suspendisse tristique auctor lacus, at sodales lorem accumsan id. Suspendisse tempus, quam id consequat rutrum, odio lectus sollicitudin massa, nec vulputate libero quam non arcu.",
    },
    {
      name: "chess",
      price: "129kr",
      image:
        "https://images.pexels.com/photos/1152662/pexels-photo-1152662.jpeg?cs=srgb&dl=pexels-ylanite-koppens-1152662.jpg&fm=jpg",
      id: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc varius, vulputate eros vel, feugiat nunc. Donec eu ex laoreet, tincidunt nisl et, facilisis orci. Suspendisse condimentum risus non orci mattis tincidunt. Nullam ut suscipit erat. Etiam vitae massa ut ipsum convallis tempor eget id augue. Sed at euismod arcu, ut tempor nunc. Suspendisse tristique auctor lacus, at sodales lorem accumsan id. Suspendisse tempus, quam id consequat rutrum, odio lectus sollicitudin massa, nec vulputate libero quam non arcu.",
    },
    {
      name: "monopoly",
      price: "239kr",
      image:
        "https://images.pexels.com/photos/1329644/pexels-photo-1329644.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1329644.jpg&fm=jpg",
      id: 6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc varius, vulputate eros vel, feugiat nunc. Donec eu ex laoreet, tincidunt nisl et, facilisis orci. Suspendisse condimentum risus non orci mattis tincidunt. Nullam ut suscipit erat. Etiam vitae massa ut ipsum convallis tempor eget id augue. Sed at euismod arcu, ut tempor nunc. Suspendisse tristique auctor lacus, at sodales lorem accumsan id. Suspendisse tempus, quam id consequat rutrum, odio lectus sollicitudin massa, nec vulputate libero quam non arcu.",
    },
  ];

  const id = useParams();

  const product = products.find((x) => x.id == id.id);

  return (
    <>
      <div className="holder">
        <Header />
        <div className="one-product-container">
          <img className="product-img" src={product.image} />
          <div className="description-box">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p className="description">{product.description}</p>
          </div>

          <div className="buy-box">
            <p>Status: In stock</p>
            <p>Qty: 1</p>
            <button>Add to cart</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
