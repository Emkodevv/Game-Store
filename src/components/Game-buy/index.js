import React from 'react';
import Button from '../Button'
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../Redux/cart/reducer';
import './style.css';

const GameBuy = ({game}) => {

    const dispatch = useDispatch();

    const handleClick =(e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game))
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button type='primary' onClick={handleClick}>В корзину</Button>
        </div>
    );
};

export default GameBuy;