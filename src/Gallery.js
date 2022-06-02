import react from 'react';

const Gallery = () => {  
    return(

        <div className="gallery">
            <figure className="gallery__item">
                <img src="./img/hotel-1.jpg" alt="Photo of hotel 1" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src="./img/hotel-2.jpg" alt="Photo of hotel 2" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src="./img/hotel-3.jpg" alt="Photo of hotel 3" className="gallery__photo"/>
            </figure>
        </div>
        )
}
export default Gallery;