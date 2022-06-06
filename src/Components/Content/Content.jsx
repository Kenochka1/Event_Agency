import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Content.css";

const Content = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-content">
          <div className="content-text">
            <h6>Не знаете, кого выбрать?</h6>
            <h3>Назначьте с нами встречу</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              possimus non, delectus nostrum debitis rem aut earum. Earum
              temporibus molestias quo animi repudiandae ea sed dolorum porro
              aliquam veritatis atque at, maxime possimus veniam vitae deleniti
              tenetur neque, blanditiis beatae, saepe soluta rem! Provident
              nesciunt odio alias recusandae, fugiat voluptates, laborum natus
              debitis saepe illum quaerat asperiores dolore, reiciendis
              blanditiis.
            </p>
            <button>НАШИ УСЛУГИ</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
