import react from 'react';

function Header(){
    return(
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
        
    );
}

export default Header;