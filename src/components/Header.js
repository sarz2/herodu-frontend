import "./Header.css";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/userActions";
const Header = () => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar navbar-dark bg-primary"
      >
        <Container variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              {" "}
              <h1 className="web-name">Herodu</h1>
            </Link>
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
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logOutHandler}>
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <Nav.Link href="/login" className="nav-link">
                      <BsFillPersonFill style={{ color: "white" }} />
                      Sign in
                    </Nav.Link>
                  </>
                )}
              </li>
              {userInfo && userInfo.user.isAdmin && (
                <li>
                  <NavDropdown title="Admin" id="adminmenu">
                    <NavDropdown.Item as={Link} to="/admin/userlist">
                      Users
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/admin/productlist">
                      Products
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/admin/orderlist">
                      Orders
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              )}
            </ul>
            <Form onSubmit={submitHandler} className="d-flex">
              <Form.Control
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search"
                className="mr-sm-2 ml-sm-5"
              ></Form.Control>
              <Button type="submit" variant="primary">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
