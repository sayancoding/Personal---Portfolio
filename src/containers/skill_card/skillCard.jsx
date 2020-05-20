import React, { Component } from "react";
import "./skillCard.css";

export default class skillCard extends Component {
  render() {
    return (
      <div>
        <div className="skill_card">
          <div className="text">
            <p className="skill_title">{this.props.name}</p>
            <div className="skill_set">
              {this.props.skillSet.map((el) => {
                return <p>{el}</p>;
              })}
              {/* <p>Java</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>SQL</p>
              <p>dart</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
