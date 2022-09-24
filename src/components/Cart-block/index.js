import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./style.css";

const CartBlock = () => {
    return (
        <div>
           <AiOutlineShoppingCart size='25px' className='cart-block__icon'/>
           <span className='cart-block__total-price'>1231 руб.</span>
        </div>
    );
};

export default CartBlock;