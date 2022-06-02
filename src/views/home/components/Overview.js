import react from 'react';
import { ReactComponent as IconStar } from '../../../img/SVG/star.svg';
import { ReactComponent as IconLocationPin } from '../../../img/SVG/location-pin.svg';
const Overview = () =>{
    return(
<div className="overview">
<h1 className="overview__heading">
    Hotel Las Palmas
</h1>

<div className="overview__stars">
    <svg className="overview__icon-star">
        <IconStar/>
        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
    </svg>
    <svg className="overview__icon-star">
    <IconStar/>
        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
    </svg>
    <svg className="overview__icon-star">
    <IconStar/>
        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
    </svg>
    <svg className="overview__icon-star">
    <IconStar/>
        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
    </svg>
    <svg className="overview__icon-star">
    <IconStar/>
        {/* <use xlink:href="img/sprite.svg#icon-star"></use> */}
    </svg>
</div>

<div className="overview__location">
    <svg className="overview__icon-location">
        <IconLocationPin/>
     {/*    <use xlink:href="img/sprite.svg#icon-location-pin"></use> */}
    </svg>
    <button className="btn-inline">Albufeira, Portugal</button>
</div>

<div className="overview__rating">
    <div className="overview__rating-average">8.6</div>
    <div className="overview__rating-count">429 votes</div>
</div>
</div>)
}
export default Overview;