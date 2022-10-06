import React from 'react';
import './Footer.scss'
import logo from "../../Assets/img/logo-footer.png"
import youtube from "../../Assets/img/youtube.svg"
import instagram from "../../Assets/img/instagram.svg"
import twitter from "../../Assets/img/twitter.svg"
import lindkolin from "../../Assets/img/in.svg"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <footer className="container block">
                <div className="nav">
                    <ul className="nav__list">
                        <li className="nav__list__item">
                            <Link to="/" className="nav__list__item__link">Home</Link>
                        </li>
                        <li className="nav__list__item">
                            <Link to="/shop" className="nav__list__item__link">Shop</Link>
                        </li>
                        <li className="nav__list__item">
                            <Link to="/blog" className="nav__list__item__link">Blog</Link>
                        </li>
                        <li className="nav__list__item">
                            <Link to="/portifilo" className="nav__list__item__link">Portifilo</Link>
                        </li>
                        <li className="nav__list__item">
                            <Link to="/contacts" className="nav__list__item__link">Cotacts</Link>
                        </li>
                    </ul>
                    <a href="#">
                        <img className='nav__logo' src={logo} alt="logo footer" />
                    </a>
                    <div className="nav__blogs">
                        <span className="nav__blogs__span">FOLLOW US:</span>
                        <a href="#" className="nav__blogs__link">
                            <img src={twitter} alt="twitter image" />
                        </a>
                        <a href="#" className="nav__blogs__link">
                            <img src={instagram} alt="instagram image" />
                        </a>
                        <a href="#" className="nav__blogs__link">
                            <img src={youtube} alt="youtube image" />
                        </a>
                        <a href="#" className="nav__blogs__link">
                            <img src={lindkolin} alt="in image" />
                        </a>
                    </div>
                </div>

                <h2 className="footer__title">FIND YOUR STORE</h2>
                <p className="footer__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, eaque repudiandae quasi aperiam.</p>
                <form className="footer__form">
                    <input className='footer__form__input' placeholder='Enter your email addres prease' type="email"  />
                    <button type='submit' className="footer__form__button">REQUEST</button>
                </form>
            </footer>
        </div>
    );
}

export default Footer;
