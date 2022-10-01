import "./Header.css";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="name-search-container">
          <h1 className="web-name">Herodu</h1>
          <div className="search-container">
            <BsSearch className="search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
            />
          </div>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "navigation expanded" : "navigation"}>
          <ul>
            <li>
              {" "}
              <FaShoppingCart style={{ color: "white" }} />
              <h3 className="flex-child">Cart</h3>
            </li>
            <li>
              {" "}
              <BsFillPersonFill style={{ color: "white" }} />
              <h3 className="flex-child">Sign in</h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
