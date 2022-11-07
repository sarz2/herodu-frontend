import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import "./App.css";
import ProductPage from "./pages/Productpage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import UserListPage from "./pages/UserListPage.js";
import UserEditPage from "./pages/UserEditPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/page/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin/userlist" element={<UserListPage />} />
        <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
        <Route path="/search/:keyword" element={<HomePage />} />
        <Route path="/page/:pageNumber" exact element={<HomePage />} />
        <Route
          path="/search/:keyword/page/:pageNumber"
          exact
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
