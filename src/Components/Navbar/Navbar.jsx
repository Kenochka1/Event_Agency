import React from "react";
import "./Navbar.css";
import logo from "../../Assets/images/logo.PNG";
import lupa from "../../Assets/images/lupa.svg";
import user from "../../Assets/images/user.svg";
import heart from "../../Assets/images/heart.svg";
import music from "../../Assets/music/sugar.mp3";
import { NavLink } from "react-router-dom";
import LiveSearch from "../LiveSearch/LiveSearch";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cartLenght } = React.useContext(cartContext);
  return (
    <div className="container-header">
      <div className="container-navbar">
        <div data-aos="fade-right" className="navbar-text">
          <NavLink to="/">
            <p className="navbar-text-p">Главная</p>
          </NavLink>
          <NavLink to="/list">
            <p className="navbar-text-p">Услуги</p>
          </NavLink>
          <NavLink to="/aboutUs">
            <p className="navbar-text-p">О нас</p>
          </NavLink>
          <NavLink to="/add">
            <p className="navbar-text-p">Добавить</p>
          </NavLink>
        </div>
        <img data-aos="fade-down" id="logo" src={logo} alt="logo" />
        <div data-aos="fade-left" className="navbar-controllers">
          <img id="lupa" src={lupa} alt="lupa" />

          <LiveSearch />
          <NavLink to="/login">
            <img id="user" src={user} alt="user" />
          </NavLink>
        </div>
        <NavLink to="/cart">
          <Badge badgeContent={cartLenght} color="error">
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
      </div>
      <div className="container-home">
        <h3 data-aos="fade-right">Cобытие | Ателье | Сервис</h3>
        <button data-aos="fade-up">НАЧАТЬ СЕЙЧАС</button>
        <audio src={music}></audio>

        <audio id="music" controls>
          <source src={music} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default Navbar;
