import React, { Component } from "react";
import "./skills.css";

import SkillCard from '../../containers/skill_card/skillCard'

export default class skills extends Component {
  render() {
    return (
      <div className="skill">
        <div className="skill_heading">
          <p>Skills & Proficiency</p>
        </div>
        <div className="skill_area">
          <div className="skill_row">
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
          </div>
        </div>
      </div>
    );
  }
}
