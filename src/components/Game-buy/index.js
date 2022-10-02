import React from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart, setItemInCart } from "../../Redux/cart/reducer";
import "./style.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemInCart);
  const isItemCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemCart) {
     console.log( dispatch(deleteItemInCart(game.id)))
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} руб.</span>
      <Button type={isItemCart ? "secondary" : "primary"} onClick={handleClick}>
        {isItemCart ? "Отменить" : "В корзину"}
      </Button>
    </div>
  );
};

export default GameBuy;
