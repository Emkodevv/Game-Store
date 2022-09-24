import React from 'react';
import Button from '../Button'
import './style.css'

const GameBuy = ({game}) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button type='primary'>В корзину</Button>
        </div>
    );
};

export default GameBuy;