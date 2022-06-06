import React from "react";
import "./Footer.css";
import line from "../../Assets/images/line.png";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="container-footer">
        <div className="footer-item">
          <h5>ПОЛЕЗНЫЕ ССЫЛКИ</h5>
          <img src={line} alt="line" />
          <p id="item1">
            Акции <br /> Оплата <br /> Политика конфедициальности
          </p>
        </div>
        <div className="footer-item">
          <h5>ОПЛАТА</h5>
          <img src={line} alt="line" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellendus non vel. Sed, velit qui.
          </p>
        </div>
        <div className="footer-item">
          <h5>КОНТАКТЫ</h5>
          <img src={line} alt="line" />

          <p>
            🕾 996 770 50 30 05 <br /> 🕾 996 995 50 30 05 <br /> 🖂
            sultanalievkanat@gmail.com
          </p>
        </div>
        <div className="footer-item">
          <h5>СОЦИАЛЬНЫЕ СЕТИ</h5>
          <img src={line} alt="line" />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nam quo quibusdam error magnam quia voluptatibus iste,
            labore non sint?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
