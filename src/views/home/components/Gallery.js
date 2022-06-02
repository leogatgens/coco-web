import react from 'react';

const Gallery = (props) => {  
    console.log(props);
    return(

        <div className="gallery">
            <figure className="gallery__item">
                <img src={props.data[0].path} alt="Photo of hotel 1" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src={props.data[1].path} alt="Photo of hotel 2" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src={props.data[2].path} alt="Photo of hotel 3" className="gallery__photo"/>
            </figure>
        </div>
        )
}
export default Gallery;