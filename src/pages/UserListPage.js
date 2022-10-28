import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listOfUsers, deleteUser } from "../redux/actions/userActions";
import { FcCheckmark } from "react-icons/fc";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success } = userDelete;

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
      <Footer />
    </>
  );
};

export default UserListPage;
