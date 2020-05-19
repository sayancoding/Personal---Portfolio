import React, { Component } from "react";
import "./skills.css";

import firebase from '../../firebase'

import SkillCard from '../../containers/skill_card/skillCard'

export default class skills extends Component {
  state = {
    skills : null
  }
  componentDidMount(){
    const db = firebase.firestore()
    db.collection('skills').get()
    .then(snapshot=>{
      const tempSkill = []
      snapshot.forEach(doc=>{
        let el = doc.data()
        tempSkill.push(el)
      })
      this.setState({skills:tempSkill})
    })
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="skill">
        <div className="skill_heading">
          <p>Skills & Proficiency</p>
        </div>
        <div className="skill_area">
          <div className="skill_row">
            {
              this.state.skills &&
              this.state.skills.map(el=>{
               return(
                 <SkillCard name={el.name} skillSet={el.skillSet}/>
               ) 
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
