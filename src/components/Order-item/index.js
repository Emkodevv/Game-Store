import React from 'react';
import { useDispatch } from 'react-redux';
import GameCover from '../Game-cover/game-cover';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {deleteItemInCart} from '../../Redux/cart/reducer'
import './style.css'

const OrderItem = ({game}) => {
    const dispatch = useDispatch()

    const handleClick =() => {
        dispatch(deleteItemInCart(game.id))
    }

    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <GameCover image={game.image} />
                </div>
                <div className='order-item__title'>
                    <span>{game.title}</span>
                </div>
                <div className='order-item__price'>
                    <span>{game.price} руб.</span>
                    <AiOutlineCloseCircle size="30px" className='order-item__close'
                    onClick={handleClick} />
                </div>
        </div>
    );
};

export default OrderItem;