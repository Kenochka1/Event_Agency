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
import "./ServiceList.css";
import { cartContext } from "../Context/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";

const max = 250000;
const min = 10;

const ServiceList = () => {
  const { getService, service } = useContext(serviceContext);
  const { addServiceToCart } = useContext(cartContext);
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
  const serviceLimit = 3;
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
                // <div className="container-serviceList">
                <div data-aos="zoom-in-up">
                  <div
                    className="card1 text-center m-4"
                    style={{ width: "18rem", height: "250px" }}
                  >
                    <div class="hover-effect-btn">
                      <img
                        src={item.img}
                        height="220"
                        width="290"
                        className="card-img-top"
                        alt={item.title}
                      />
                      <h6 className="title2">{item.type}</h6>
                      <h5 className="title">{item.title} </h5>

                      <div class="overlay"></div>
                      <div class="button">
                        <NavLink to={`/details/${item.id}`}>
                          <button className="topicListLook">
                            Просмотреть{" "}
                          </button>
                        </NavLink>
                        <Button onClick={(e) => addServiceToCart(item)}>
                          <AddShoppingCartIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </Box>
        <div data-aos="zoom-in-up">
          <ReactPaginate
            previousLabel={"⮜"}
            nextLabel={"⮞"}
            pageCount={pageCount}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            onPageChange={changePage}
          />
        </div>
      </>
    </>
  );
};

export default ServiceList;
