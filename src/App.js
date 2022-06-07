import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./Components/Content/Content";
import ServiceContextProvider from "./Components/Context/ServiceContext";
import Footer from "./Components/Footer/Footer";
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    // check pull request
    <BrowserRouter>
      <ServiceContextProvider>
        <MainRoutes />
        <Footer />
      </ServiceContextProvider>
    </BrowserRouter>
  );
};

export default App;
