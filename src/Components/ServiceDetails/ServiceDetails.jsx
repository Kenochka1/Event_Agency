import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import BrushIcon from "@mui/icons-material/Brush";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { serviceContext } from "../Context/ServiceContext";
import { Navbar } from "react-bootstrap";
import MainNavbar from "../MainNavbar/MainNavbar";

const ServiceDetails = () => {
  const { serviceDetails, getServiceDetails, deleteService } =
    useContext(serviceContext);
  let { id } = useParams();
  useEffect(() => {
    getServiceDetails(id);
  }, []);
  return (
    <>
      <MainNavbar />
      <div style={{ display: "flex" }}>
        <div className="previewList">
          <img
            style={{ width: "600px", margin: "auto 100px" }}
            id="imgCards"
            src={serviceDetails.img}
            alt="img"
          />
        </div>

        <div style={{ margin: "auto 100px", fontSize: "25px" }}>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            {serviceDetails.title}
          </p>
          <p className="topicDetailsPT1">{serviceDetails.type}</p>
          <p className="topicDetailsPT1">{serviceDetails.description}</p>
          <p
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="topicDetailsPT1"
          >
            {serviceDetails.price}
          </p>

          <div style={{ margin: "50px 30px" }}>
            <NavLink to={`/edit/${id}`}>
              <button
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "30px",
                  borderRadius: "10px",
                }}
                className="btnCrud"
                id="edit"
              >
                <BrushIcon />
              </button>
            </NavLink>
            <NavLink to="/list">
              <button
                style={{ width: "50px", height: "50px", borderRadius: "10px" }}
                className="btnCrud"
                id="del"
                onClick={() => deleteService(id)}
              >
                <RestoreFromTrashIcon />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
