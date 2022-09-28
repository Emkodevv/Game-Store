import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartMenu from "../Cart-menu";
import ItemInCart from "../itemInCart";
import { calcTotalPrice } from "../utils";
import { useState } from "react";
import "./style.css";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemInCart);
  const totalPrice = calcTotalPrice(items);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <div>
      <ItemInCart quantity={items.length} />
      <AiOutlineShoppingCart
        size="25px"
        className="cart-block__icon"
        onClick={() => setIsCartVisible(!isCartVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartVisible && <CartMenu items={items} />}
    </div>
  );
};

export default CartBlock;
