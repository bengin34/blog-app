import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";
import Footer from "../components/Footer";

const AppRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>

      {currentUser && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs/:id" element={<Details />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
      <Footer  />

    </BrowserRouter>
  );
};

export default AppRouter;
