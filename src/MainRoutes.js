import React from "react";
import { Route, Routes } from "react-router-dom";
import ServiceList from "./Components/ServiceList/ServiceList.jsx";
import Content from "./Components/Content/Content.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Payment from "./Components/Payment/Payment.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/add" element={<ServiceList />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default MainRoutes;
