import React from "react";
import { calcTotalPrice } from "../utils";
import Button from '../Button'
import CartItem from '../Cart-Item';
import './style.css'

const CartMenu = ({ items, onClick }) => {
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-menu">
      <div className="cart-menu_games-list">
        {items.length > 0 ? items.map((game) => 
        <CartItem key={game.id} title={game.title} price={game.price} id={game.id} />) 
        : "Корзина пуста"}
      </div>
    { items.length > 0 ? (
        <div className="cart-menu__arrange">
        <div className="cart-menu__total-price">
          <span>Итого :</span>
          <span>{totalPrice} руб.</span>
        </div>
        <Button type="primary">
            Оформить заказ
        </Button>
      </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
