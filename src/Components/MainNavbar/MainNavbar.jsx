import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo.PNG";
import lupa from "../../Assets/images/lupa.svg";
import user from "../../Assets/images/user.svg";
import heart from "../../Assets/images/heart.svg";
import "./MainNavbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";
import { Badge } from "@mui/material";
import { cartContext } from "../Context/CartContext";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { authContext } from "../Context/AuthContext";

const MainNavbar = () => {
  const { cartLenght } = React.useContext(cartContext);

  const { user } = React.useContext(authContext);
  console.log(user);
  return (
    <div className="mainNavbar">
      <div className="container-navbars">
        <div data-aos="fade-right" className="navbar-text">
          <NavLink to="/">
            <p className="navbar-text-p">Главная</p>
          </NavLink>
          <NavLink to="/list">
            <p className="navbar-text-p">Услуги</p>
          </NavLink>
          <NavLink to="/aboutUs">
            <p className="navbar-text-p">О нас</p>
          </NavLink>{" "}
        </div>
        <img data-aos="fade-down" id="logo" src={logo} alt="logo" />
        <div data-aos="fade-left" className="navbar-controllers">
          <img id="lupa" src={lupa} alt="lupa" />

          <LiveSearch />
          {user.email === "admin@gmail.com" ? (
            <NavLink to="/add">
              <p className="navbar-text-p">Добавить</p>
            </NavLink>
          ) : null}
          <NavLink to="/cart">
            <Badge id="shop" badgeContent={cartLenght} color="error">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
