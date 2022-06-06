import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo.PNG";
import lupa from "../../Assets/images/lupa.svg";
import user from "../../Assets/images/user.svg";
import heart from "../../Assets/images/heart.svg";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <div className="mainNavbar">
      <div className="container-navbars">
        <div className="navbar-text">
          <NavLink to="/">
            <p className="navbar-text-p">Главная</p>
          </NavLink>
          <NavLink to="/add">
            <p className="navbar-text-p">Услуги</p>
          </NavLink>
          <NavLink to="/aboutUs">
            <p className="navbar-text-p">О нас</p>
          </NavLink>{" "}
        </div>
        <img id="logo" src={logo} alt="logo" />
        <div className="navbar-controllers">
          <img id="lupa" src={lupa} alt="lupa" />
          <button>Поиск</button>
          <p id="vhod">Вход / Регистрация</p>
          <img id="user" src={user} alt="user" />
          <img id="heart" src={heart} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
