import React from 'react';

const Review = (props) => {  
 console.log(props);
    return(     
    <figure className="review">
    <blockquote className="review__text">
    {props.data.review}
    </blockquote>
    <figcaption className="review__user">
        <img src="img/user-2.jpg" alt="User 1" className="review__photo"/>
        <div className="review__user-box">
            <p className="review__user-name">{props.data.username}</p>
            <p className="review__user-date">{props.data.date}</p>
        </div>
        <div className="review__rating">{props.data.rating}</div>
    </figcaption>
    </figure>);
}

export default Review;