import React from "react";
import { Card } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import "./Content.css";
import advice1 from "../../Assets/images/advice1.png";
import advice2 from "../../Assets/images/advice2.png";
import advice3 from "../../Assets/images/advice3.png";
import video from "../../Assets/video/weddingvideo.mp4";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-advice">
          <div className="advice-text">
            <p data-aos="fade-right">Полезные статьи</p>
            <h4 data-aos="fade-right">Лучшие советы по подбору ресторана</h4>
          </div>
          {/* bootstrap cards  */}
          <div className="advice-container-card">
            <div data-aos="fade-up-left" className="advice-cards">
              <Card
                id="cards-content"
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundImage: `url(${advice1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Card.Body>
                  <Card.Title id="advice-text">
                    Как выбрать часы для своей будущей жены
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div data-aos="fade-up-left" className="advice-cards">
              <Card
                id="cards-content"
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundImage: `url(${advice2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Card.Body>
                  <Card.Title id="advice-text">
                    Запонки для мужа: 7 ключевых правил покупки аксессуара{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div data-aos="fade-up-left" className="advice-cards">
              <Card
                id="cards-content"
                style={{
                  width: "18rem",
                  height: "18rem",
                  backgroundImage: `url(${advice3})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Card.Body>
                  <Card.Title id="advice-text">
                    Как выбрать обручальные кольца молодоженам{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="advice-button">
            <NavLink to="/aboutUs">
              <button data-aos="fade-up">Читать наш блог</button>
            </NavLink>
          </div>
          {/* bootstrap cards */}
        </div>
        {/* advice finish */}
        {/* social start */}
        <div className="container-social">
          <div data-aos="fade-up" className="social-text">
            <p>#shattykEvent</p>
            <h4>Мы в социальных сетях</h4>
          </div>
          <div className="container-video">
            <video data-aos="zoom-in-up" autoPlay loop muted>
              <source id="video" width={700} src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* social finish */}

        {/* content start */}
        <div data-aos="fade-up" className="container-content">
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
            <NavLink to="/list">
              <button>НАШИ УСЛУГИ</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
