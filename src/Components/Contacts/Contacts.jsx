import React from 'react';
import './Contacts.scss'
import contacts from '../../Assets/img/contacts.PNG'
import contacts2 from '../../Assets/img/contacts2.PNG'
import contacts3 from '../../Assets/img/contacts3.PNG'
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div className='cintainer'>
            <div className="contacts">
                <h3 className="contacts__title">Contacts</h3>
                <ul className="contacts__list">
                    <li className="contacts__list__item">
                        <Link to="/" className="contacts__list__item__link">Home {'>'} </Link>
                    </li>
                    <li className="contacts__list__item">
                        <a href="" className="contacts__list__item__link">Contacts</a>
                    </li>
                </ul>
                <div className="contacts__line"></div>
            </div>

            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>

            <div className="maps">
                <h3 className="maps__title"> We Are Close to You</h3>
                <input placeholder='Tipe Your City' type="text" className="maps__search" />
                <a href='#' className="maps__button button">Find {'>'}
                    <a href="#" className="maps__button__link"></a>
                </a>
            </div>

            <div className="message">
                <div className="message__block">
                    <div className="message__block__card">
                        <img src={contacts} alt="" />
                        <span className="message__block__card__addres">91 Mount St, Mayfair</span>
                        <span className="message__block__card__addres">New York, CA 90064</span>
                    </div>
                    <div className="message__block__card">
                        <img src={contacts2} alt="" />
                        <span className="message__block__card__addres">Phone: 222 333 6363</span>
                        <span className="message__block__card__addres">Email: oggi@bigstore.com</span>
                    </div>
                    <div className="message__block__card">
                        <img src={contacts3} alt="" />
                        <span className="message__block__card__addres">Mon-Fri – 10:30 – 19:00</span>
                        <span className="message__block__card__addres">Sat-Sun – 10:30 – 19:00</span>
                    </div>
                </div>

                <div className="submit">
                    <h4 className="submit__title">Get in Touch</h4>
                    <p className="submit__desc">Contact us for more information or questions</p>
                    <form className="submit__form">
                        <input className='submit__form__name' type="text" placeholder='Name' />
                        <input className='submit__form__name2' type="email" placeholder='Email' />
                        <textarea className='submit__form__text' placeholder='Message'  cols="30" rows="7"></textarea>
                        <button href='#' className="submit__form__button button">Send Message {'>'}
                            <a href="#" className="submit__form__button__link"></a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
