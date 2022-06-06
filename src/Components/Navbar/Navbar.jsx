import React from "react";
import "./Navbar.css";
import logo from "../../Assets/images/logo.PNG";
import lupa from "../../Assets/images/lupa.svg";
import user from "../../Assets/images/user.svg";
// import lupa from "../../Assets/images/lupa.svg";

const Navbar = () => {
  return (
    <div className="container-header">
      <div className="container-navbar">
        <div className="navbar-text">
          <p className="navbar-text-p">Главная</p>
          <p className="navbar-text-p">Услуги</p>
          <p className="navbar-text-p">О нас</p>
        </div>
        <img id="logo" src={logo} alt="logo" />
        <div className="navbar-controllers">
          <img src={lupa} alt="lupa" />
          <button>Поиск</button>
          <p id="vhod">Вход/Регистрация</p>
          <img src={user} alt="user" />
          <p id="heart">♡</p>
        </div>
      </div>
      <div className="container-home">
        <h3>Cобытие | Ателье | Сервис</h3>
        <button>НАЧАТЬ СЕЙЧАС</button>
      </div>
    </div>
  );
};

export default Navbar;
