import React from "react";


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