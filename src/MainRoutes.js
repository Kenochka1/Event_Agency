import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceList from "./Components/ServiceList/ServiceList.jsx";
import Content from "./Components/Content/Content.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Payment from "./Components/Payment/Payment.jsx";
import AddService from "./Components/Admin/AddService/AddService.jsx";
import EditService from "./Components/Admin/EditService/EditService.jsx";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails.jsx";
import LoginLogout from "./Components/Auth/LoginLogout.jsx";
import Cart from "./Components/Cart/Cart.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginLogout />} />
      <Route path="/" element={<Content />} />
      <Route path="/add" element={<AddService />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/edit/:id" element={<EditService />} />
      <Route path="/list" element={<ServiceList />} />
      <Route path="/details/:id" element={<ServiceDetails />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
