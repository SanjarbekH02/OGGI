import React, { useState } from 'react';
import './Modal.scss'
import modal from '../../Assets/img/modal-img.PNG'
import close from '../../Assets/img/x.PNG'


const Modal = () => {
    const [open, setOpen] = useState(true)
    const handleClick = () => {
        setOpen(false)
    }

    return (
        <div>
            <div className={`modal ${open ? '' : 'modal--active'}`}>
                <div className="modal__content">
                    <img src={modal} alt="modal image" />
                    <div className="modal__content__left">
                        <img onClick={handleClick} src={close} alt="close" />
                        <h4 className="modal__content__left__title">Subscribe {"&"}
                            Get the Latest
                            Updates</h4>
                        <p className="modal__content__left__desc">Be the first to learn about our latest trends and get exclusive offers</p>
                        <input placeholder='Your Email Address' className='modal__content__left__input' type="text" />
                        <a href='#' className="modal__content__left__button button">SUBSCRIBE {'>'}
                                <a href="#" className="modal__content__left__button__link"></a>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
