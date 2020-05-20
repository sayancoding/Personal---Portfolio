import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            Made With <i class="fas fa-heart"></i>
          </div>
          <div className="footer_link">
            <ul>
              <li>
                <Link onClick={_=>window.open("https://github.com/sayancoding")}>
                  <i class="fab fa-github-alt"></i>
                </Link>
              </li>
              <li>
                <Link onClick={_=>window.open("https://www.instagram.com/backward_space/")}>
                  <i class="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link onClick={_=>window.open("https://www.linkedin.com/in/sayan-maity-6316921a6/")}>
                  <i class="fab fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
