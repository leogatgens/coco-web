import React from 'react';
import Loading from '../../../shared/component/Loading'
const Gallery = (props) => {  

 function Mostrar() {
    if(props.isLoading){
       return <Loading></Loading>
    }else{
        var count  = props.data.length;
        return  <div className="gallery">
        <figure className="gallery__item">
        {count === 0
            ? <img src="../../../img/No-Image-Placeholder.svg.png" alt="Photo of hotel 1" className="gallery__photo"/> 
            : <img src={props.data[0].path} alt="Photo of hotel 1" className="gallery__photo"/>
        }
            
        </figure>
        <figure className="gallery__item">
        {count === 0
            ? <img src="../../../img/No-Image-Placeholder.svg.png" alt="Photo of hotel 2" className="gallery__photo"/>
            : <img src={props.data[1].path} alt="Photo of hotel 2" className="gallery__photo"/>
        } 
        </figure>

        <figure className="gallery__item">
        {   count === 0 
        ?   <img src="../../../img/No-Image-Placeholder.svg.png" alt="Photo of hotel 3" className="gallery__photo"/>
        :   <img src={props.data[2].path} alt="Photo of hotel 3" className="gallery__photo"/>
        }
         
        </figure>
    </div>
    }
}
    return(
        <React.Fragment>
            {Mostrar(props) }       
        </React.Fragment>
        
        )
}
export default Gallery;