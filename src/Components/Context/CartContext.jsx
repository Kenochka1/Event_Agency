import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountServiceCart,
} from "../../help/cartFunc";

export const cartContext = createContext();

const INIT_STATE = {
  cart: {},
  cartLength: getCountServiceCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addServiceToCart = (serviceItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        service: [],
        totalPrice: 0,
      };
    }

    let newService = {
      item: serviceItem,
      count: 1,
      subPrice: 0,
    };

    let filterCart = cart.service.filter((elem) => {
      return elem.item.id === serviceItem.id;
    });

    if (filterCart.length > 0) {
      cart.service = cart.service.filter((elem) => {
        return elem.item.id !== serviceItem.id;
      });
    } else {
      cart.service.push(newService);
    }
    newService.subPrice = calcSubPrice(newService);
    cart.totalPrice = calcTotalPrice(cart.service);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.service.length,
    });
  };
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        service: [],
      };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };
  const deleteCartService = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.service = cart.service.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.service);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.service.length,
    });
    getCart();
  };
  function changeServiceCount(id, count) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.service = cart.service.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });

    cart.totalPrice = calcTotalPrice(cart.service);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLenght: state.cartLength,
        addServiceToCart,
        getCart,
        deleteCartService,
        changeServiceCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
