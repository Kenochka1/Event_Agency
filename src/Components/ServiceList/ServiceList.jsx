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
import Filter from "../Filter/Filter";

const max = 250000;
const min = 10;

const ServiceList = () => {
  const { getService, service } = useContext(serviceContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") || "all");
  const [price1, setPrice1] = useState(+searchParams.get("price_gte") || +min);
  const [price2, setPrice2] = useState(+searchParams.get("price_lte") || +max);

  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q") || "",
      price_gte: price1,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
      price_gte: price1,
      price_lte: price2,
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
  }, [type, searchParams, price1, price2]);

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
        <div className="filter">
          <Filter
            type={type}
            setType={setType}
            min={min}
            max={max}
            price1={price1}
            setPrice1={setPrice1}
            price2={price2}
            setPrice2={setPrice2}
          />
        </div>
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
