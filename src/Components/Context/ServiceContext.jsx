import React, { createContext, useReducer } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const serviceContext = createContext();

const API = "http://localhost:8000/service";
let totalPages;

const INIT_STATE = {
  service: [],
  serviceDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_SERVICE":
      return { ...state, service: action.payload };
    case "GET_SERVICE_DETAILS":
      return { ...state, serviceDetails: action.payload };
    default:
      return state;
  }
};

// Переменная для пагинации
let page = 1;

const getTotalService = async () => {
  const { data } = await axios.get(API);
  totalPages = Math.ceil(data.length / 3);
};

// функция пагинации

const ServiceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  console.log(location.search);

  const addService1 = async (newService) => {
    await axios.post(API, newService);
  };

  const getService = async () => {
    const { data } = await axios.get(`${API}${location.search}`);
    dispatch({
      type: "GET_SERVICE",
      payload: data,
    });
    getTotalService();
  };

  const getServiceDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_SERVICE_DETAILS",
      payload: data,
    });
  };

  const deleteService = async (id) => {
    await axios.delete(`${API}/${id}`);
    getService();
  };

  const editService = async (id, servObj) => {
    await axios.patch(`${API}/${id}`, servObj);
    getService();
  };

  return (
    <serviceContext.Provider
      value={{
        service: state.service,
        serviceDetails: state.serviceDetails,
        addService1,
        getService,
        getServiceDetails,
        deleteService,
        editService,
      }}
    >
      {children}
    </serviceContext.Provider>
  );
};

export default ServiceContextProvider;
