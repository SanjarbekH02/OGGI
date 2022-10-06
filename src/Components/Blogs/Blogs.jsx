import React from 'react';
import './Blogs.scss'
import blogs from '../../Assets/img/blogs.PNG'
import blogs2 from '../../Assets/img/blogs2.PNG'
import blogs3 from '../../Assets/img/blogs3.PNG'
import blogs4 from '../../Assets/img/blogs4.PNG'
import blogs5 from '../../Assets/img/blogs5.PNG'
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="small">
                <h3 className="small__title">Small Images</h3>
                <ul className="small__list">
                    <li className="small__list__item">
                        <Link to="/" className="small__list__item__link">Home {'>'} </Link>
                    </li>
                    <li className="small__list__title">Small Images</li>
                </ul>
                <div className="small__line"></div>
            </div>

            <div className="blocks">
                <div className="blocks__left">
                    <img src={blogs} alt="blogs image" />
                </div>
                <div className="blocks__right">
                    <div className='blocks__right__nature'>NATURE</div>
                    <h4 className="blocks__right__title">Amet risus nullam</h4>
                    <p className="blocks__right__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem massa. Proin semper viverra venenatis. Morbi in condimentum metus. Integer sed sem in lacus vehicula laoreet. Nunc nec rhoncus tellus, ac facilisis ipsum. Nunc quis est felis. Nam ipsum felis, volutpat a nunc ac, dapibus egestas dui. Sed ut dolor urna. Nulla ac mauris mattis libero porta lobortis. Maecenas dictum enim eget purus finibus maximus. In ultricies mauris sem, in feugiat nulla finibus vel. Phasellus auctor fermentum nunc, et gravida nulla imperdiet ut. Sed iaculis sed eros eget porttitor. Etiam auctor ullamcorper nibh, ut feugiat urna posuere et. Vivamus facilisis, felis ac pulvinar dapibus, turpis enim tincidunt tellus, ut convallis nisl dui nec elit. Pellentesque semp...</p>
                    <div className="blocks__right__more">
                        <a href='#' className="blocks__right__more__button button">Load more {'>'}
                            <a href="#" className="blocks__right__more__button__link"></a>
                        </a>
                        <div className="blocks__right__more__line"></div>
                    </div>
                </div>
            </div>

            <div className="blocks">
                <div className="blocks__left">
                    <img src={blogs2} alt="blogs image" />
                </div>
                <div className="blocks__right">
                    <div className='blocks__right__nature'>NATURE</div>
                    <h4 className="blocks__right__title">Semper quis lectus</h4>
                    <p className="blocks__right__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem massa. Proin semper viverra venenatis. Morbi in condimentum metus. Integer sed sem in lacus vehicula laoreet. Nunc nec rhoncus tellus, ac facilisis ipsum. Nunc quis est felis. Nam ipsum felis, volutpat a nunc ac, dapibus egestas dui. Sed ut dolor urna. Nulla ac mauris mattis libero porta lobortis. Maecenas dictum enim eget purus finibus maximus. In ultricies mauris sem, in feugiat nulla finibus vel. Phasellus auctor fermentum nunc, et gravida nulla imperdiet ut. Sed iaculis sed eros eget porttitor. Etiam auctor ullamcorper nibh, ut feugiat urna posuere et. Vivamus facilisis, felis ac pulvinar dapibus, turpis enim tincidunt tellus, ut convallis nisl dui nec elit. Pellentesque semp...</p>
                    <div className="blocks__right__more">
                        <a href='#' className="blocks__right__more__button button">Load more {'>'}
                            <a href="#" className="blocks__right__more__button__link"></a>
                        </a>
                        <div className="blocks__right__more__line"></div>
                    </div>
                </div>
            </div>

            <div className="blocks">
                <div className="blocks__left">
                    <img src={blogs3} alt="blogs image" />
                </div>
                <div className="blocks__right">
                    <div className='blocks__right__nature'>NATURE</div>
                    <h4 className="blocks__right__title">Dictumst vestibulum</h4>
                    <p className="blocks__right__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem massa. Proin semper viverra venenatis. Morbi in condimentum metus. Integer sed sem in lacus vehicula laoreet. Nunc nec rhoncus tellus, ac facilisis ipsum. Nunc quis est felis. Nam ipsum felis, volutpat a nunc ac, dapibus egestas dui. Sed ut dolor urna. Nulla ac mauris mattis libero porta lobortis. Maecenas dictum enim eget purus finibus maximus. In ultricies mauris sem, in feugiat nulla finibus vel. Phasellus auctor fermentum nunc, et gravida nulla imperdiet ut. Sed iaculis sed eros eget porttitor. Etiam auctor ullamcorper nibh, ut feugiat urna posuere et. Vivamus facilisis, felis ac pulvinar dapibus, turpis enim tincidunt tellus, ut convallis nisl dui nec elit. Pellentesque semp...</p>
                    <div className="blocks__right__more">
                        <a href='#' className="blocks__right__more__button button">Load more {'>'}
                            <a href="#" className="blocks__right__more__button__link"></a>
                        </a>
                        <div className="blocks__right__more__line"></div>
                    </div>
                </div>
            </div>

            <div className="blocks">
                <div className="blocks__left">
                    <img src={blogs4} alt="blogs image" />
                </div>
                <div className="blocks__right">
                    <div className='blocks__right__nature'>NATURE</div>
                    <h4 className="blocks__right__title">Sit amet risus</h4>
                    <p className="blocks__right__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem massa. Proin semper viverra venenatis. Morbi in condimentum metus. Integer sed sem in lacus vehicula laoreet. Nunc nec rhoncus tellus, ac facilisis ipsum. Nunc quis est felis. Nam ipsum felis, volutpat a nunc ac, dapibus egestas dui. Sed ut dolor urna. Nulla ac mauris mattis libero porta lobortis. Maecenas dictum enim eget purus finibus maximus. In ultricies mauris sem, in feugiat nulla finibus vel. Phasellus auctor fermentum nunc, et gravida nulla imperdiet ut. Sed iaculis sed eros eget porttitor. Etiam auctor ullamcorper nibh, ut feugiat urna posuere et. Vivamus facilisis, felis ac pulvinar dapibus, turpis enim tincidunt tellus, ut convallis nisl dui nec elit. Pellentesque semp...</p>
                    <div className="blocks__right__more">
                        <a href='#' className="blocks__right__more__button button">Load more {'>'}
                            <a href="#" className="blocks__right__more__button__link"></a>
                        </a>
                        <div className="blocks__right__more__line"></div>
                    </div>
                </div>
            </div>

            <div className="blocks">
                <div className="blocks__left">
                    <img src={blogs5} alt="blogs image" />
                </div>
                <div className="blocks__right">
                    <div className='blocks__right__nature'>NATURE</div>
                    <h4 className="blocks__right__title">Condimentum lacinia</h4>
                    <p className="blocks__right__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem massa. Proin semper viverra venenatis. Morbi in condimentum metus. Integer sed sem in lacus vehicula laoreet. Nunc nec rhoncus tellus, ac facilisis ipsum. Nunc quis est felis. Nam ipsum felis, volutpat a nunc ac, dapibus egestas dui. Sed ut dolor urna. Nulla ac mauris mattis libero porta lobortis. Maecenas dictum enim eget purus finibus maximus. In ultricies mauris sem, in feugiat nulla finibus vel. Phasellus auctor fermentum nunc, et gravida nulla imperdiet ut. Sed iaculis sed eros eget porttitor. Etiam auctor ullamcorper nibh, ut feugiat urna posuere et. Vivamus facilisis, felis ac pulvinar dapibus, turpis enim tincidunt tellus, ut convallis nisl dui nec elit. Pellentesque semp...</p>
                    <div className="blocks__right__more">
                        <a href='#' className="blocks__right__more__button button">Load more {'>'}
                            <a href="#" className="blocks__right__more__button__link"></a>
                        </a>
                        <div className="blocks__right__more__line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
