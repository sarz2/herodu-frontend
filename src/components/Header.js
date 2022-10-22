import "./Header.css";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="header-container">
        <div className="name-search-container">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            <h1 className="web-name">Herodu</h1>
          </Link>
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
              <Nav.Link href="/cart" className="flex-child">
                Cart
              </Nav.Link>
            </li>
            <li>
              {userInfo ? (
                <NavDropdown title={userInfo.user.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logOutHandler}></NavDropdown.Item>
                  Log out
                </NavDropdown>
              ) : (
                <>
                  <BsFillPersonFill style={{ color: "white" }} />
                  <Nav.Link href="/login" className="flex-child">
                    Sign in
                  </Nav.Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
