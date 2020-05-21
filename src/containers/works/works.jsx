import React, { Component } from "react";
import {Link} from 'react-router-dom';
import firebase from "../../firebase";
import "./works.css";
import Aos from "aos";
import "aos/dist/aos.css";
import WorkCard from "../../components/workCard/workCard";
import Loading from '../../components/preloader/loading'

export default class works extends Component {
  state = {
    loading:true,
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
          loading:false
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
            {this.state.loading && <Loading />}
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
        <div className="more">
          <Link onClick={(_) => window.open("https://github.com/sayancoding")}>
            See More
          </Link>
        </div>
      </div>
    );
  }
}
