import React from "react";
import axios from "axios";
import {GLOBALS} from "../../../globals/globals-variables"
class AddReview extends React.Component{

    constructor(props) {
        super(props);
        this.state = { review: "write your review here"};
      }
    HandleOnSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        var newReview = {
            review : this.state.review
        }
        console.log(newReview);
        const serviceUrl = `${GLOBALS.rootAPI}/reviews`;;
        let config = {
            headers: {
                    "Content-Type": "application/json"
        
            }
         };
        axios.post(serviceUrl,this.state.review,config) //then es usando promises, se puede asignar a una variable si quiere sin promises
        .then(response =>  console.log(response.data));
      
    //    const response = await axios.post('https://reqres.in/api/articles', review);
    //    this.setState({ articleId: response.data.id });
    }

    HandleOnChange = (event) => {
      
        console.log(event);
        this.setState({
            review : event.target.value
        });

    }
    render(){
        return (
        <div className="addreviewform">
            <h2>Add a new revie </h2>
            <form action="" id="new-review" onSubmit={this.HandleOnSubmit}>
                <label>Review :</label>
                <textarea type="text" value={this.state.review} onChange={this.HandleOnChange} ></textarea>
                <button type="submit"><span>Book now</span></button>
            </form>
           
        </div>);
    }
}

export default AddReview;