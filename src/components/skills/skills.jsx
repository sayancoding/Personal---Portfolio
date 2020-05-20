import React, { Component } from "react";
import "./skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import firebase from '../../firebase'

import SkillCard from '../../containers/skill_card/skillCard'
import Loading from '../preloader/loading'

export default class skills extends Component {
  state = {
    skills : null,
    loading:true
  }
  componentDidMount(){
    Aos.init({ duration: 1200 });
    const db = firebase.firestore()
    db.collection('skills').get()
    .then(snapshot=>{
      const tempSkill = []
      snapshot.forEach(doc=>{
        let el = doc.data()
        tempSkill.push(el)
      })
      this.setState({skills:tempSkill,loading:false})
    })
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="skill">
        <div className="skill_heading" data-aos="fade-left">
          <p className="skill_head_text">Skills & Proficiency</p>
        </div>
        <div className="skill_area" data-aos="fade-up">
          <div className="skill_row">
            {this.state.skills &&
              this.state.skills.map((el) => {
                return (
                  <SkillCard
                    data-aos="fade-up"
                    name={el.name}
                    skillSet={el.skillSet}
                  />
                );
              })}
              {
                this.state.loading&&
                <Loading/>
              }
          </div>
        </div>
      </div>
    );
  }
}
