import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from 'react-redux';
import CartMenu from "../Cart-menu"
import {calcTotalPrice} from '../utils'
import "./style.css";

const CartBlock = () => {

const items = useSelector(state => state.cart.itemInCart);
const totalPrice = calcTotalPrice(items)

    return (
        <div>
           <AiOutlineShoppingCart size='25px' className='cart-block__icon'/>
           <span className='cart-block__total-price'>{totalPrice} руб.</span>
           <CartMenu items={items}/> 
        </div>
    );
};

export default CartBlock;