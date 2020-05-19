import React, { Component } from 'react'
import './aboutMe.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Profile from '../../../assets/images/person.png'

export default class aboutMe extends Component {
  componentDidMount(){
    Aos.init({duration:900})
  }
  render() {
    return (
      <div className="about">
        <div data-aos="fade-left" className="text">
          <div className="heading">About me</div>
          <div className="lower-text" data-aos="fade-up">
            Hello, I'm a self-taught web Developer from West Bengal, India.
            <br />
            <p className="mid-text">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performance
              experiences.
            </p>
            <p className="low-text">
              Currently i'm studying final year on computer science. I work on a
              wide variety of interesting and meaningful projects on a daily
              basis.
            </p>
          </div>
          <button className="explore">
            Expand <i className="icon fas fa-expand-alt"></i>
          </button>
        </div>
        <div className="image" data-aos="fade">
          <div className="_image">
            <img className="" src={Profile} alt="profile" />
          </div>
        </div>
      </div>
    );
  }
}
