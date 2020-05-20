import React, { Component } from 'react'
import './works.css'
import Aos from "aos";
import "aos/dist/aos.css";
import WorkCard from '../../components/workCard/workCard'

export default class works extends Component {
  componentDidMount(){
    Aos.init({ duration: 1200 });
  }
  render() {
    return (
      <div className="work">
        <div className="work_heading" data-aos="fade-left">
          <p className="work_head_text">Works & Projects</p>
        </div>
        <div className="work_area" data-aos="fade-up">
          <div className="work_row">
            <WorkCard/>
            <WorkCard/>
          </div>
        </div>
      </div>
    );
  }
}
