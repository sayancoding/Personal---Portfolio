import React, { Component } from "react";
import firebase from "../../firebase";
import "./works.css";
import Aos from "aos";
import "aos/dist/aos.css";
import WorkCard from "../../components/workCard/workCard";

export default class works extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    Aos.init({ duration: 1200 });
    const db = firebase.firestore();
    db.collection("Projects")
      .get()
      .then((snapshot) => {
        let temp = [];
        snapshot.forEach((doc) => {
          let data = doc.data();
          temp.push(data);
        });
        this.setState({
          projects: temp,
        });
        console.log(this.state.projects);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="work">
        <div className="work_heading" data-aos="fade-left">
          <p className="work_head_text">Works & Projects</p>
        </div>
        <div className="work_area" data-aos="fade-up">
          <div className="work_row">
            {this.state.projects &&
              this.state.projects.map((el) => {
                return (
                  <WorkCard
                    name={el.name}
                    desc={el.desc}
                    tags={el.tags}
                    source={el.source}
                    demo={el.demo}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
