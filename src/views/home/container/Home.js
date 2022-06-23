import '../../../css/style.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Gallery from '../components/Gallery';
import Detail from './Detail';
import Overview from '../components/Overview';
import  {notifications} from '../../../globals/data'
import React from 'react';
import axios from "axios";
import {GLOBALS} from "../../../globals/globals-variables"
//Se utiliza una clase para ver como se utilizar una clase con state y props
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initLoading: true,
      galeryimages : []
     };
  }

  //Metodo async para llamar un API con AXIOS
  ObtainAllReviews = async () => {
    try {
      const serviceUrl = `${GLOBALS.rootAPI}/gallery`;
      let config = {
        headers: {    
          "Content-Type": "application/json",      
          "x-api-key": "5Vqg81rmkG59NzsKm22qi3S3MOnZyYhvaymCXVN7"                      
        
      }
    };      
      await axios.get(serviceUrl,config) //then es usando promises, se puede asignar a una variable si quiere sin promises
      .then((response) =>{            
        this.setState({       
          initLoading: false,
          galeryimages: response.data
        });
      })
      .catch((ex) => {
        this.setState({
          initLoading: false
        });
        console.log(ex.toString());
      })    
      
    } catch (err) {
      this.setState({
        initLoading: false
      });
      console.log(err);
    }
  };


  componentDidMount() { 
      if (this.state.galeryimages.length === 0) {      
        this.ObtainAllReviews();        
      } 
  }

  render() {
    
    return (
      <div className="container">     
        <Header data={notifications}></Header>  
        <div className="content">        
        <SideBar></SideBar>  
            <main className="hotel-view">
                <Gallery data={this.state.galeryimages} isLoading={this.state.initLoading}></Gallery>
                <Overview></Overview>  
                <Detail/>
            </main>
        </div>
  </div>
    );
  }
}
 


export default Home;
