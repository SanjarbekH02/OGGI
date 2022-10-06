import React from 'react';
import { useState } from 'react';
import './Home.scss'
import paradise from '../../Assets/img/paradise.PNG'
import paradise2 from '../../Assets/img/paradise2.PNG'
import bacimg from '../../Assets/img/bac1.PNG'
import tone from '../../Assets/img/tone.PNG'
import tone2 from '../../Assets/img/tone2.PNG'
import tone3 from '../../Assets/img/tone3.PNG'
import tone4 from '../../Assets/img/tone4.PNG'
import order from '../../Assets/img/order.PNG'
import order2 from '../../Assets/img/order2.PNG'
import bacg from '../../Assets/img/bac2.PNG'
import Modal from '../Modal/Modal';
// import Slider from './Slider';

const Home = () => {

    // const [open, setOpen] = useState(true)
    return (
        <main>
            <Modal/>

            <div className="container slider">
                <div className="wrapper bac"></div>
            </div>
            <section className='paradise container'>
                <div className="paradise__left">
                    <img src={paradise} alt="paradise img" />
                    <div className="paradise__left__block">
                        <span className="paradise__left__block__title">Red Sleeve Coat
                            $255.00</span>
                        <a href='#' className="paradise__left__block__button">Add to Cart {'>'}
                            <a href="" className="paradise__left__block__button__link"></a>
                        </a>
                    </div>
                </div>

                <div className="paradise__right">
                    <span className="paradise__right__day">NEW NOW</span>
                    <span className="paradise__right__month">
                        <span className='line'></span>
                        <span className='days'>NOVOMBER 17</span>
                    </span>

                    <h2 className="paradise__right__title">Paradise Touch</h2>
                    <p className="paradise__right__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum corporis nulla numquam. Hic dolorem tempora animi impedit! Labore, ducimus dolore! Voluptatum, illum harum? </p>
                    <a href='#' className="paradise__right__button">Shop by Look {'>'}
                        <a href="" className="paradise__right__button__link"></a>
                    </a>
                    <img src={paradise2} alt="paradise img" />
                    <div className="paradise__right__block">
                        <span className="paradise__right__block__title2">Chunky
                            $130.00
                        </span>
                        <div href="" className="paradise__right__block__button">Add to Cart {'>'}
                            <a href="" className="paradise__right__block__button__link"></a>
                        </div>
                    </div>

                </div>
            </section>

            <div className="bacground-img">
                <img className='bacground-img__img' src={bacimg} alt="bacground" />
            </div>

            <section className='container'>
                <div className="inspiration">
                    <div className="inspiration__left">
                        <span className="inspiration__left__day">INSPIRATION</span>
                        <span className="inspiration__left__month">
                            <span className='line'></span>
                            <span className='days'>COLORFUL AUTUMN</span>
                        </span>

                        <h2 className="inspiration__left__title">Tone to Tone</h2>
                        <p className="inspiration__left__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum corporis nulla numquam. Hic dolorem tempora animi </p>
                        <a href='#' className="inspiration__left__button">Explore Collection {'>'}
                            <a href="" className="inspiration__left__button__link"></a>
                        </a>
                    </div>
                    <div className="inspiration__right">
                        <img src={tone} alt="tone image" />
                    </div>
                </div>

                <div className="inspiration__tone">
                    <div className="inspiration__tone__block">
                        <img src={tone2} alt="tone" />
                        <a href='#' className="inspiration__left__button button">Shoes {'>'}
                            <a href="" className="inspiration__left__button__link"></a>
                        </a>
                    </div>
                    <div className="inspiration__tone__block">
                        <img src={tone3} alt="tone" />
                        <a href='#' className="inspiration__left__button button">Dresses {'>'}
                            <a href="" className="inspiration__left__button__link"></a>
                        </a>
                    </div>
                    <div className="inspiration__tone__block">
                        <img src={tone4} alt="tone" />
                        <a href='#' className="inspiration__left__button button">Dresses {'>'}
                            <a href="" className="inspiration__left__button__link"></a>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="detail">
                    <div className="details container">
                        <div className="details__left">
                            <img src={bacg} alt="tone image" />
                        </div>
                        <div className="details__right">
                            <span className="details__right__day">ADD DETAILS</span>
                            <span className="details__right__month">
                                <span className='line'></span>
                                <span className='days'>UP TO 20% OFF</span>
                            </span>

                            <h2 className="details__right__title">Accessories
                                Edition</h2>
                            <p className="details__right__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum corporis nulla numquam. Hic dolorem tempora animi </p>
                            <a href='#' className="details__right__button">Explore Collection {'>'}
                                <a href="" className="details__right__button__link"></a>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container details__edition">
                    <div className="details__edition__left">
                        <img src={order} alt="order image" />
                        <div className="details__edition__block">
                            <span className="details__edition__block__mes">White T-SHirt $65.00</span>
                            <a href='#' className="inspiration__left__button button">Dresses {'>'}
                                <a href="" className="inspiration__left__button__link"></a>
                            </a>
                        </div>
                    </div>
                    <div className="details__edition__right">
                        <img src={order2} alt="order image" />
                        <div className="details__edition__block">
                            <span className="details__edition__block__mes">White T-SHirt $65.00</span>
                            <a href='#' className="inspiration__left__button button">Dresses {'>'}
                                <a href="" className="inspiration__left__button__link"></a>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container details__instagram">
                    <div className="details__instagram__follow">FOLLOW OGGI ON</div>
                    <h4 className="details__instagram__title">INSTAGRAM</h4>
                </div>
            </section>

        </main>
    );
}

export default Home;
