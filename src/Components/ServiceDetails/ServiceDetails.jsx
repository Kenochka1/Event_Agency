import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import BrushIcon from "@mui/icons-material/Brush";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { serviceContext } from "../Context/ServiceContext";
import { Navbar } from "react-bootstrap";
import MainNavbar from "../MainNavbar/MainNavbar";
import "./ServiceDetails.css";
import trash from "../../Assets/images3/trash.svg";
import edit from "../../Assets/images3/edit.svg";

const ServiceDetails = () => {
  const { serviceDetails, getServiceDetails, deleteService } = useContext(
    serviceContext
  );
  let { id } = useParams();
  useEffect(() => {
    getServiceDetails(id);
  }, []);
  return (
    <>
      <MainNavbar />

      <>
        <div className="containerTopicDetails">
          <div data-aos="fade-right" className="containerTopicDetailsLeft">
            <img id="imgCards" src={serviceDetails.img} alt="img" />
          </div>
          <div data-aos="fade-left" className="containerTopicDetailsRight">
            <div className="contImg"></div>
            <p className="topicDetailsPT1">{serviceDetails.type}</p>
            <h3 className="topicDetailsH3">{serviceDetails.title}</h3>
            <p className="topicDetailsPT1">{serviceDetails.description}</p>
            <p
              style={{ fontSize: "30px", fontWeight: "bold" }}
              className="topicDetailsPT1"
            >
              {serviceDetails.price}
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="topicDetailsButtons">
          <NavLink to={`/edit/${id}`}>
            <button className="btnCrud" id="edit">
              <img src={edit} alt="edit" />
            </button>
          </NavLink>
          <NavLink to="/list">
            <button
              className="btnCrud"
              id="del"
              onClick={() => deleteService(id)}
            >
              <img src={trash} alt="trash" />
            </button>
          </NavLink>
        </div>
      </>
    </>
  );
};

export default ServiceDetails;
