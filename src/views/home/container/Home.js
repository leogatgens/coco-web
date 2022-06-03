import '../../../css/style.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Gallery from '../components/Gallery';
import Detail from './Detail';
import Overview from '../components/Overview';
import  {galeryimages, notifications} from '../../../globals/data'
import React from 'react';
import {GLOBALS} from '../../../globals/globals-variables'
import axios from "axios";

//Se utiliza una clase para ver como se utilizar una clase con state y props
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initLoading: true,
      datawishlist : null
     };
  }

  //Metodo async para llamar un API con AXIOS
  ObtainWishList = async () => {
    try {
      const serviceUrl = "https://jsonplaceholder.typicode.com/comments";
      let config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        
        }
      };
      await axios.get(serviceUrl,config) //then es usando promises, se puede asignar a una variable si quiere sin promises
      .then((response) =>{            
        this.setState({       
          initLoading: false,
          datawishlist: response.data
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
      if (this.state.datawishlist === null) {      
        this.ObtainWishList();
        console.log("componentDidMount TripsContainer");
        console.log(this.state.datawishlist);      
      } 
  }

  render() {
    
    return (
      <div className="container">     
        <Header data={notifications}></Header>  
        <div className="content">        
        <SideBar></SideBar>  
            <main className="hotel-view">
                <Gallery data={galeryimages} isLoading={this.state.initLoading}></Gallery>
                <Overview></Overview>  
                <Detail/>
            </main>
        </div>
  </div>
    );
  }
}
 


export default Home;
