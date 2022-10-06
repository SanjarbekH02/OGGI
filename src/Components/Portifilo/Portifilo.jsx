import React from 'react';
import './Portifilo.scss'
import portifilo from '../../Assets/img/portifilo.PNG'
import portifilo2 from '../../Assets/img/portifilo2.PNG'
import portifilo3 from '../../Assets/img/portifilo3.PNG'
import { Link } from 'react-router-dom';

const Portifilo = () => {
    return (
        <div className='container'>
            <div className="gallery">
                <h3 className="gallery__title">Portfolio Single</h3>
                <ul className="gallery__list">
                    <li className="gallery__list__item">
                        <Link to="/" className="gallery__list__item__link">Home {'>'} </Link>
                    </li>
                    <li className="gallery__list__item">
                        <Link to="/portifilo" className="gallery__list__item__link">Portifilo {'>'} </Link>
                    </li>
                    <li className="gallery__list__title">Molestie ac feugiat</li>
                </ul>
                <div className="gallery__line"></div>
            </div>
            <div className="portifilo">
                <img className='portifilo__img' src={portifilo} alt="image" />
                <img className='portifilo__img' src={portifilo2} alt="image" />
                <img className='portifilo__img' src={portifilo3} alt="image" />
            </div>

            <h2 className="molestie__title">Molestie ac feugiat</h2>
            <div className="molestie">
                <p className="molestie__desc">Sapien eget mi proin sed libero enim sed. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Justo nec ultrices dui sapien eget mi proin sed. Arcu dui vivamus arcu felis. Pellentesque sit amet porttitor eget dolor morbi. Quam elementum pulvinar etiam non quam. Sed nisi lacus sed viverra tellus in hac habitasse. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Magna fermentum iaculis eu non diam phasellus. Facilisi etiam dignissim diam quis enim lobortis.</p>
                <div className="molestie__line"></div>
                <ul className="molestie__list">
                    <li className="molestie__list__irem"><strong>Category: </strong>Lifestyle</li>
                    <li className="molestie__list__irem"><strong>Author: </strong>Wood</li>
                    <li className="molestie__list__irem"><strong>Client: </strong>Tori</li>
                    <li className="molestie__list__irem"><strong>Date: </strong>September 25, 2019</li>
                </ul>
            </div>
        </div>
    );
}

export default Portifilo;
