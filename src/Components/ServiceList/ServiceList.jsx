import { Filter } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { serviceContext } from "../Context/ServiceContext";
import MainNavbar from "../MainNavbar/MainNavbar";
import ReactPaginate from "react-paginate";
import "./ServiceList.css";

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
                // <div className="container-serviceList">
                <div>
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
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </Box>
        <div>
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
        </div>
      </>
    </>
  );
};

export default ServiceList;
