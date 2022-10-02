import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/utils";
import OrderItem from "../../components/Order-item";
import "./style.css";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemInCart)

  if (items.length < 0) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price" style={{fontSize:"30px", fontWeight: "bold"}}>
          {items.length} товар(а) на сумму ( {calcTotalPrice(items)}) руб.
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
