import logo from './logo.svg';
import './App.css';
import './css/style.css';
function App() {
  return (
    <div className="container">
    <header className="header">
        <img src="img/logo.png" alt="trillo logo" className="logo"/>

        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search hotels"/>
            <button className="search__button">
                <svg className="search__icon">
                    {/* <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use> */}
                </svg>
            </button>
        </form>

        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    {/* <use xlink:href="img/sprite.svg#icon-bookmark"></use> */}
                </svg>
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    {/* <use xlink:href="img/sprite.svg#icon-chat"></use> */}
                </svg>
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <img src="img/user.jpg" alt="User photo" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">Jonas</span>
            </div>
        </nav>
    </header>


    <div className="content">
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            {/* <use xlink:href="img/sprite.svg#icon-home"></use> */}
                        </svg>
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            {/* <use xlink:href="img/sprite.svg#icon-aircraft-take-off"></use> */}
                        </svg>
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <span>Car rental</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
                        </svg>
                        <span>Tours</span>
                    </a>
                </li>
            </ul>

            <div className="legal">
                &copy; 2017 by trillo. All rights reserved.
            </div>
        </nav>



        <main className="hotel-view">
            <div className="gallery">
                <figure className="gallery__item">
                    <img src="img/hotel-1.jpg" alt="Photo of hotel 1" className="gallery__photo"/>
                </figure>
                <figure className="gallery__item">
                    <img src="img/hotel-2.jpg" alt="Photo of hotel 2" className="gallery__photo"/>
                </figure>
                <figure className="gallery__item">
                    <img src="img/hotel-3.jpg" alt="Photo of hotel 3" className="gallery__photo"/>
                </figure>
            </div>

            <div className="overview">
                <h1 className="overview__heading">
                    Hotel Las Palmas
                </h1>

                <div className="overview__stars">
                    <svg className="overview__icon-star">
                        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
                    </svg>
                    <svg className="overview__icon-star">
                        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
                    </svg>
                    <svg className="overview__icon-star">
                        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
                    </svg>
                    <svg className="overview__icon-star">
                        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
                    </svg>
                    <svg className="overview__icon-star">
                        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
                    </svg>
                </div>

                <div className="overview__location">
                    <svg className="overview__icon-location">
                        {/* <use xlink:href="img/sprite.svg#icon-location-pin"></use> */}
                    </svg>
                    <button className="btn-inline">Albufeira, Portugal</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">429 votes</div>
                </div>
            </div>

            <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="paragraph">
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Free wifi in all rooms</li>
                        <li className="list__item">Air conditioning and heating</li>
                        <li className="list__item">Pets allowed</li>
                        <li className="list__item">We speak all languages</li>
                        <li className="list__item">Perfect for families</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className="recommend__friends">
                            <img src="img/user-3.jpg" alt="Friend 1" className="recommend__photo"/>
                            <img src="img/user-4.jpg" alt="Friend 2" className="recommend__photo"/>
                            <img src="img/user-5.jpg" alt="Friend 3" className="recommend__photo"/>
                            <img src="img/user-6.jpg" alt="Friend 4" className="recommend__photo"/>
                        </div>
                    </div>
                </div>

                <div className="user-reviews">
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src="img/user-1.jpg" alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">Nick Smith</p>
                                <p className="review__user-date">Feb 23rd, 2017</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                    </figure>

                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src="img/user-2.jpg" alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">Mary Thomas</p>
                                <p className="review__user-date">Sept 13th, 2017</p>
                            </div>
                            <div className="review__rating">9.3</div>
                        </figcaption>
                    </figure>

                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>

                <div className="cta">
                    <h2 className="cta__book-now">
                        Good news! We have 4 free rooms for your selected dates!
                    </h2>
                    <button className="btn">
                        <span className="btn__visible">Book now</span>
                        <span className="btn__invisible">Only 4 rooms left</span>
                    </button>
                </div>

            </div>


        </main>
    </div>
</div>
  );
}

export default App;
