import React from 'react';
import './Shop.scss'
import mesImg from '../../Assets/img/i.webp'
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className='container'>
            <div className="cart">
                <h3 className="cart__title">Cart</h3>
                <ul className="cart__list">
                    <li className="cart__list__item">
                        <Link to="/" className="cart__list__item__link">Home {'>'} </Link> 
                    </li>
                    <li className="cart__list__title">Cart</li>
                </ul>
            </div>

            <div className="messages">
                <img src={mesImg} alt="message image" className="messege__img" />
                <span className="message__text">Your cart is cerrently empty</span>
            </div>

            <button className="button">Return to shop {'>'}</button>
        </div>
    );
}

export default Shop;
