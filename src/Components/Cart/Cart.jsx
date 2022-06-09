import React, { useContext, useEffect } from "react";
import { cartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartService, changeServiceCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  return (
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
                    <img width={50} src={elem.item.img1} alt="phone" />
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

      <h4>Общая сумма: {cart.totalPrice}</h4>
      <button>Оформить</button>
    </div>
  );
};

export default Cart;
