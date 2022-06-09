import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import MainNavbar from "../MainNavbar/MainNavbar";
import "./Cart.css";

const Cart = () => {
  const { cart, getCart, deleteCartService, changeServiceCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
<<<<<<< HEAD
      <MainNavbar />
      <div>
        <table>
          <thead>
            <tr>
              <th>Фото</th>
              <th>Позиция</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Итого</th>
            </tr>
          </thead>
          <tbody>
            {cart.service
              ? cart.service.map((elem) => (
                  <tr key={elem.item.id}>
                    <td>
                      <img width={50} src={elem.item.img} alt="phone" />
                    </td>
                    <td>{elem.item.title}</td>
                    <td>{elem.item.price}</td>
                    <td>
                      <input
                        type="number"
                        value={elem.count}
                        onChange={(e) =>
                          changeServiceCount(elem.item.id, e.target.value)
                        }
                      />
                    </td>
                    <td>{elem.subPrice}</td>
                    <td>
                      <button onClick={() => deleteCartService(elem.item.id)}>
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>

=======
      <MainNavbar />{" "}
      <div className="mainContainer-cart">
        <div className="container-cart">
          <table>
            <thead>
              <tr className="cart-mainText">
                <th data-aos="flip-left" id="mainText">
                  Фото
                </th>
                <th data-aos="flip-left" id="mainText">
                  Название
                </th>
                <th data-aos="flip-left" id="mainText">
                  Цена
                </th>
                <th data-aos="flip-left" id="mainText">
                  Кол
                </th>
                <th data-aos="flip-left" id="mainText">
                  Итого
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.service
                ? cart.service.map((elem) => (
                    <tr key={elem.item.id}>
                      <td>
                        <img
                          data-aos="fade-right"
                          className="elem-img"
                          width={200}
                          src={elem.item.img}
                          alt="phone"
                        />
                      </td>
                      <td data-aos="flip-left" className="elem-title">
                        {elem.item.title}
                      </td>
                      <td data-aos="flip-left" className="elem-price">
                        {elem.item.price}
                      </td>
                      <td>
                        <input
                          data-aos="flip-left"
                          id="input-cart"
                          type="number"
                          style={{ width: "70px" }}
                          value={elem.count}
                          onChange={(e) =>
                            changeServiceCount(elem.item.id, e.target.value)
                          }
                        />
                      </td>
                      <td data-aos="flip-left" className="elem-subPrice">
                        {elem.subPrice}
                      </td>
                      <td>
                        <button
                          data-aos="fade-left"
                          id="delete"
                          onClick={() => deleteCartService(elem.item.id)}
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-pay2">
>>>>>>> 26f7d548523e2b6ef1d5be1bac39414b34f4ddaa
        <h4>Общая сумма: {cart.totalPrice}</h4>
      </div>
      <div className="container-pay">
        <NavLink to="/payment">
          <button id="oformit">Оформить</button>
        </NavLink>
      </div>
    </>
  );
};

export default Cart;
