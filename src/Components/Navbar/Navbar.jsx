import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Logo from '../../Assets/img/logo.png'
import search from '../../Assets/img/search.png'
import korzina from '../../Assets/img/korzina.png'
const Navbar = () => {
    const [navActive, setNavActive] = useState(false)
    const activeHandler = () => {
        setNavActive(true)
    }

    const closeActive = (e) => {
        if(e.target.matches('.navbar__nav--open')){
            setNavActive(false)
        }
    }

    const closeActiveList = (e) => {
        if(e.target.matches('.navbar__list__item__link')){
            setNavActive(false)
        }
    }

    return (
        <div className='header container'>
            <header className={`navbar`}>
                <div onClick={closeActive} className={`navbar__nav ${navActive ? 'navbar__nav--open' : '' }`}>
                    <ul  className={`navbar__list ${navActive ? 'navbar__list--active' : ''}`}>
                        <li  className='navbar__list__item'>
                            <a href="/home" className="navbar__list__item__img">
                                <img className='navbar__list__item__img__pic' src={Logo} alt="logo" />
                            </a>
                            <span className="navbar__list__item__line"></span>
                        </li>
                        <li  onClick={closeActiveList} className="navbar__list__item">
                            <Link to="/" className="navbar__list__item__link">Home</Link>
                        </li>
                        <li onClick={closeActiveList} className="navbar__list__item">
                            <Link to="/shop" className="navbar__list__item__link">Shop</Link>
                        </li>
                        <li onClick={closeActiveList} className="navbar__list__item">
                            <Link to="/blog" className="navbar__list__item__link">Blog</Link>
                        </li>
                        <li onClick={closeActiveList} className="navbar__list__item">
                            <Link to="/portifilo" className="navbar__list__item__link">Potifilo</Link>
                        </li>
                        <li onClick={closeActiveList} className="navbar__list__item">
                            <Link to="/contacts" className="navbar__list__item__link">Contacts</Link>
                        </li>

                    </ul>
                </div>
                <a href="/home" className="navbar__img">
                    <img src={Logo} alt="logo" />
                </a>
                <div className="navbar__block">
                    <img className='navbar__block__img' src={search} alt="search" />
                    <img className='navbar__block__img' src={korzina} alt="korzina  " />
                </div>
                <div onClick={activeHandler} className="navbar__toggle">
                    <span className="navbar__toggle__line"></span>
                    <span className="navbar__toggle__line"></span>
                    <span className="navbar__toggle__line"></span>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
