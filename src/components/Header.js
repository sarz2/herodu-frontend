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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            <h1 className="web-name">Herodu</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>{" "}
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="/cart" className="nav-link active">
                  <FaShoppingCart style={{ color: "white" }} />
                  Cart
                </Nav.Link>
              </li>

              <li className="nav-item dropdown">
                {userInfo ? (
                  <NavDropdown title={userInfo.user.name} id="username">
                    <Link to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Item onClick={logOutHandler}>
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <Nav.Link href="/login" className="nav-link">
                      Sign in
                      <BsFillPersonFill style={{ color: "white" }} />
                    </Nav.Link>
                  </>
                )}
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
