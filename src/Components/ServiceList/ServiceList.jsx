import { Filter } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { serviceContext } from "../Context/ServiceContext";
import MainNavbar from "../MainNavbar/MainNavbar";
import ReactPaginate from "react-paginate";

const ServiceList = () => {
  const { getService, service } = useContext(serviceContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getService();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  // ! Paginate======================
  const [pageNumber, setPageNumber] = useState(0);
  const serviceLimit = 10;
  const serviceVisited = pageNumber * serviceLimit;

  const pageCount = Math.ceil(service.length / serviceLimit);

  let sliceTwoIndex = serviceVisited + serviceLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <MainNavbar />
      <>
        <Filter type={type} setType={setType} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            mt: 5,
          }}
        >
          {service
            ? service.slice(serviceVisited, sliceTwoIndex).map((item) => (
                <div>
                  <div>
                    <div
                      className="card1 text-center m-4"
                      style={{ width: "18rem", height: "350px" }}
                    >
                      <img
                        src={item.img}
                        height="200"
                        className="card-img-top"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <NavLink to={`/details/${item.id}`}>
                          <Button className="topicListLook">Просмотреть</Button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
          <ReactPaginate
            previousLabel={"Назад"}
            nextLabel={"Вперед"}
            pageCount={pageCount}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            onPageChange={changePage}
          />
        </Box>
      </>
    </>
  );
};

export default ServiceList;
