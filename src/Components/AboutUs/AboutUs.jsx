import React from "react";
import { Carousel } from "react-bootstrap";
import MainNavbar from "../MainNavbar/MainNavbar";
import "./AboutUs.css";
import wedd from "../../Assets/images/wedd.jpeg";

const AboutUs = () => {
  return (
    <>
      <MainNavbar />
      <div className="container-aboutUs">
        <div className="aboutUs-left">
          <h3>О нас</h3>
          <p className="aboutUs-p">
            SHATTYK — это сервис для организации свадебных и частных
            мероприятий, который состоит из онлайн-журнала, магазина и
            участников проекта.
          </p>
          <p className="aboutUs-p1">
            Мы объединяем моду, красоту, путешествия, современную фотографию и
            лучших свадебных профессионалов, чтобы вы сделали свадьбу такой,
            какой хотите ее видеть.
          </p>
          <button>Связаться с нами</button>
        </div>
        <div className="aboutUs-right">
          {/* Карусель Bootstrap START */}
          <Carousel>
            <Carousel.Item>
              <img
                id="wedd"
                className="d-block w-100"
                src={wedd}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 id="ph">ph:Toktonaliev</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="wedd"
                className="d-block w-100"
                src={wedd}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 id="ph">ph: Aman Muratbekov</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="wedd"
                className="d-block w-100"
                src={wedd}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 id="ph">ph: Erjan Kadyrbekov</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* Карусель Bootstrap FINISH */}
        </div>
      </div>
      {/* ABOUTUS CONTAINER 2 START */}
      <div className="container2-aboutUs">
        <h2>КОНТАКТЫ</h2>
        <div className="aboutUs-texts">
          <div className="aboutsUs-design">
            <h5>Головной офис</h5>
            <p>
              Табышалиева 29 <br /> Линейная 67
            </p>
          </div>

          <div className="aboutsUs-design">
            <h5>Телефоны</h5>
            <p>
              996 770 503005 <br /> 996 995 503005
            </p>
          </div>

          <div className="aboutsUs-design">
            <h5>Email</h5>
            <p>
              sultanaliev228@gmail.com <br /> ilika9679@gmail.com{" "}
            </p>
          </div>
          <div className="aboutsUs-design">
            <h5>Доп адреса</h5>
            <p>
              Табышалиева 29 <br /> Линейная 67
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
