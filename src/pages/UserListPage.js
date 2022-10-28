import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listOfUsers, deleteUser, signup } from "../redux/actions/userActions";
import { FcCheckmark } from "react-icons/fc";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserListPage = () => {
  const [isShow, invokeModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success } = userDelete;

  const userSignup = useSelector((state) => state.userSignup);
  const { error: errorSignup } = userSignup;

  useEffect(() => {
    if (userInfo && userInfo.user.isAdmin) {
      dispatch(listOfUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, userInfo, success, navigate]);

  const deleteUserHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  const createNewUserHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(signup(name, email, password));
    }
  };
  const initModal = () => {
    return invokeModal(!isShow);
  };
  return (
    <>
      <Header />
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          {users && (
            <tbody>
              {users.map((user) => (
                <tr key={users._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <FcCheckmark />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      style={{ backgroundColor: "red" }}
                      className="btn-sm"
                      onClick={() => deleteUserHandler(user._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      )}
      <Button
        type="button"
        variant="primary"
        data-toggle="modal"
        data-target="#modal"
        onClick={initModal}
      >
        Create New User
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorSignup && <Message variant="danger">{errorSignup}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          <Form onSubmit={createNewUserHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
};

export default UserListPage;
