import React, { Component } from 'react'
import Confetti from "react-confetti";
import './header.css'

export default class header extends Component {
  render() {
    return (
      <div>
        <Confetti width={window.innerWidth} height={window.innerHeight} friction={0.98} recycle={false}/>
        <p className="tiny-text">Hey, my name is</p>
        <div className="upper-text">Sayan Maity.</div>
        <div className="middle-text">I use to think to build through web.</div>
        <div className="designation-text">student | developer | learner</div>
        <div className="btn-area">
          <button className="btn">
            Explore Me <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
