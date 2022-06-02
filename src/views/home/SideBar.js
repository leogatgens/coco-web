
import React from 'react';

import { ReactComponent as IconHome } from '../../img/SVG/home.svg';
import { ReactComponent as IconAircraft } from '../../img/SVG/aircraft-take-off.svg';
import { ReactComponent as IconKey } from '../../img/SVG/key.svg';
import { ReactComponent as IconMap } from '../../img/SVG/map.svg';
function SideBar(){
    return(
<nav className="sidebar">
<ul className="side-nav">
    <li className="side-nav__item side-nav__item--active">
        <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
                <IconHome/>
                {/* <use xlink:href="img/sprite.svg#icon-home"></use> */}
            </svg>
            <span>Hotel</span>
        </a>
    </li>
    <li className="side-nav__item">
        <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
                <IconAircraft></IconAircraft>
                {/* <use xlink:href="img/sprite.svg#icon-aircraft-take-off"></use> */}
            </svg>
            <span>Flight</span>
        </a>
    </li>
    <li className="side-nav__item">
        <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
            <IconKey/>
                {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
            </svg>
            <span>Car rental</span>
        </a>
    </li>
    <li className="side-nav__item">
        <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
                <IconMap></IconMap>
                {/* <use xlink:href="img/sprite.svg#icon-map"></use> */}
            </svg>
            <span>Tours</span>
        </a>
    </li>
</ul>

<div className="legal">
    &copy; 2017 by trillo. All rights reserved.
</div>
</nav>);
}

export default SideBar;