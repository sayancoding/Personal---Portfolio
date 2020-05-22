import React, { Component } from "react";
import "./contact.css";
import Footer from "../../components/footer/footer";
export default class contact extends Component {
  
  // state={
  //   name:'',
  //   email:''
  // }

  // handleSubmit = (event) => {
    
  // };
  // onHandleChanger(event) {
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.onHandleChanger} />
          <input type="text" name="email" onChange={this.onHandleChanger} />
          <input type="submit" value="submit" />
        </form> */}
        contact component
        <Footer />
      </div>
    );
  }
}
