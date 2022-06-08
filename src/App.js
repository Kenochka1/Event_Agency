import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./Components/Content/Content";
import AuthContextProvider from "./Components/Context/AuthContext";
import ServiceContextProvider from "./Components/Context/ServiceContext.jsx";
import Footer from "./Components/Footer/Footer";
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <ServiceContextProvider>
            <MainRoutes />
            <Footer />
          </ServiceContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
