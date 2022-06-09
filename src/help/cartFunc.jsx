export function getCountServiceCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.service.length : 0;
}

export function calcSubPrice(service) {
  return service.count * service.item.price;
}

export function calcTotalPrice(service) {
  let totalPrice = 0;
  service.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}
