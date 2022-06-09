import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Context/AuthContext";
import ServiceContextProvider from "./Components/Context/ServiceContext.jsx";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import Aos from "aos";
import "aos/dist/aos.css";
import CartContextProvider from "./Components/Context/CartContext";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <ServiceContextProvider>
            <CartContextProvider>
              <MainRoutes />
              <Footer />
            </CartContextProvider>
          </ServiceContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
