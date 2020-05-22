import React, { Component } from "react";
import "./footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default class footer extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <div className="footer" data-aos="fade">
        <div className="footer_text_area">
          <div className="footer_text">
            Made With <i className="fas fa-heart"></i>
          </div>
          <div className="footer_link">
            <ul>
              <li>
                <p onClick={_=>window.open("https://github.com/sayancoding")}>
                  <i className="fab fa-github-alt"></i>
                </p>
              </li>
              <li>
                <p onClick={_=>window.open("https://www.instagram.com/backward_space/")}>
                  <i className="fab fa-instagram"></i>
                </p>
              </li>
              <li>
                <p onClick={_=>window.open("https://www.linkedin.com/in/sayan-maity-6316921a6/")}>
                  <i className="fab fa-linkedin"></i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
