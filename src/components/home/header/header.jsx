import React, { Component } from "react";
import Confetti from "react-confetti";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./header.css";

export default class header extends Component {
  
  componentDidMount(){
    Aos.init({duration:2000})
  }
  
  render() {
    return (
      <div className="banner">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          friction={0.98}
          recycle={false}
        />
        <p className="tiny-text" data-aos="slide-up">
          Hey, my name is
        </p>
        <div className="upper-text" data-aos="slide-up">
          Sayan Maity.
        </div>
        <div data-aos="slide-up" className="middle-text">
          I use to think to build through web.
        </div>
        <div className="designation-text" data-aos="fade-left">
          student | developer | learner
        </div>
        <div className="btn-area">
          <a href="#about">
          <button className="btn" data-aos="fade-up">
            Explore Me <i className="fas fa-arrow-right"></i>
          </button>
          </a>
        </div>
      </div>
    );
  }
}
