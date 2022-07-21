import "../../../css/style.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Gallery from "../components/Gallery";
import Detail from "./Detail";
import Overview from "../components/Overview";
import { notifications } from "../../../globals/data";
import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../../actions";

//Se utiliza una clase para ver como se utilizar una clase con state y props
class Home extends React.Component {
  constructor(props) {    
    super(props);    
  }
  
  componentDidMount() {   
    this.props.fetchImages();
  }
  render() {
    return (
      <div className="container">
        <Header data={notifications}></Header>
        <div className="content">
          <SideBar></SideBar>
          <main className="hotel-view">
            <Gallery
              data={this.props.imagesData}
              isLoading={this.props.imagesData.length > 0 ? false : true}
            ></Gallery>
            <Overview></Overview>
            <Detail />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {  
  return { imagesData: state.images};//Obtiene el estado del combineReducers
};

export default connect(mapStateToProps, { fetchImages: fetchImages })(Home); //Al inyectar el action automaticamente crea el connect crea un dispatcher
