import React from "react";
import { Carousel } from "react-bootstrap";
import MainNavbar from "../MainNavbar/MainNavbar";
import "./AboutUs.css";
import wedd from "../../Assets/images/wedd.jpeg";
import linelong from "../../Assets/images/linelong.png";

const AboutUs = () => {
  return (
    <>
      <MainNavbar />
      <div className="container-aboutUs">
        <div data-aos="fade-right" className="aboutUs-left">
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
        <div data-aos="fade-left" className="aboutUs-right">
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
        <h2 data-aos="fade-rigth"> КОНТАКТЫ</h2>
        <div className="aboutUs-text-container">
          <div data-aos="fade-left" className="aboutsUs-design">
            <h5>Головной офис</h5>
            <p>
              ۩ Табышалиева 29 <br /> ۩ Линейная 67
            </p>
          </div>

          <div data-aos="fade-left" className="aboutsUs-design">
            <h5>Телефоны</h5>
            <p>
              ☏ 996 770 503005 <br /> ☏ 996 995 503005
            </p>
          </div>

          <div data-aos="fade-right" className="aboutsUs-design">
            <h5>Email</h5>
            <p>
              🖂 sultanaliev228@gmail.com <br /> 🖂 ilika9679@gmail.com
            </p>
          </div>
          <div data-aos="fade-right" className="aboutsUs-design">
            <h5>Доп адреса</h5>
            <p>
              ۩ Табышалиева 29 <br /> ۩ Линейная 67
            </p>
          </div>
        </div>
        <img id="linelong" src={linelong} alt="linelong" />
        <div data-aos="zoom-in-up">
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2055.0180325627275!2d74.58547838383201!3d42.87153125058064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8241b52669f%3A0xb8b43841ad54c50b!2zMjkg0YPQu9C40YbQsCDQotCw0LHRi9GI0LDQu9C40LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1654518461911!5m2!1sru!2skg"
            width={1200}
            height={600}
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
