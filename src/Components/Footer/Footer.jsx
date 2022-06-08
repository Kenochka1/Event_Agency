import React from "react";
import "./Footer.css";
import line from "../../Assets/images/line.png";
import youtube from "../../Assets/images2/youtube.svg";
import vk from "../../Assets/images2/vk.svg";
import telega from "../../Assets/images2/telega.svg";
import instagram from "../../Assets/images2/instagram.svg";
import visa from "../../Assets/images2/visa.svg";
import mastercard from "../../Assets/images2/mastercard.svg";
import paypal from "../../Assets/images2/paypal.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="container-footer">
        {/* <div className="footer-item">
          <h5>ПОЛЕЗНЫЕ ССЫЛКИ</h5>
          <img id="line" src={line} alt="line" />
          <p id="item1">
            Акции <br /> Оплата <br /> Политика конфедициальности
          </p>
        </div> */}

        <div className="footer-item">
          <h5>ОПЛАТА</h5>
          <img id="line" src={line} alt="line" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi{" "}
            <br />
            <NavLink to="/payment">
              <img id="visa" src={visa} alt="visa" />
              <img id="paypal" src={paypal} alt="paypal" />
              <img id="mastercard" src={mastercard} alt="mastercard" />
            </NavLink>
          </p>
        </div>

        <div className="footer-item">
          <h5>КОНТАКТЫ</h5>
          <img id="line" src={line} alt="line" />
          <p>
            🕾 +996 (770) 50 30 05 <br /> 🕾 +996 (995) 50 30 05 <br /> 🖂
            sultanalievkanat@gmail.com <br /> 🖂 sultanaliev228@gmail.com
          </p>
        </div>

        <div className="footer-item">
          <h5>СОЦИАЛЬНЫЕ СЕТИ</h5>
          <img id="line" src={line} alt="line" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="https://vk.com/" target="_blank">
            {" "}
            <img id="vk" src={vk} alt="vk" />{" "}
          </a>
          <a href="https://www.youtube.com/watch?v=3z92NeR7KWU" target="_blank">
            <img id="youtube" src={youtube} alt="youtube" />
          </a>
          <a href="https://web.telegram.org/" target="_blank">
            <img id="telega" src={telega} alt="telega" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img id="instagram" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
