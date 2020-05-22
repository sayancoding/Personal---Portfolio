import React, { Component } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default class contact extends Component {
  state = {
    name: "",
    email: "",
  };
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  handleSubmit = (event) => {
    console.log(this.state);
    this.sendRequest();
    event.preventDefault();
  };
  onHandleChanger = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendRequest() {
    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };
    fetch("http://localhost:4000/sendmail", reqOp)
      .then((res) => res.json())
      .then((resBack) => console.log(resBack))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="contact">
        <p className="contact_head" data-aos="fade-up">
          Hit me up
        </p>
        <form onSubmit={this.handleSubmit} data-aos="fade-up">
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Name"
            onChange={this.onHandleChanger}
          />
          <br />
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="email@example.com"
            onChange={this.onHandleChanger}
          />
          <br />
          <input type="submit" value="Touch" disabled="true"/>
        </form>
        <div className="contact_footer">
          <div className="footer">
            <div className="footer_text_area">
              <div className="footer_text">
                Made With <i className="fas fa-heart"></i>
              </div>
              <div className="footer_link">
                <ul>
                  <li>
                    <p
                      onClick={(_) =>
                        window.open("https://github.com/sayancoding")
                      }
                    >
                      <i className="fab fa-github-alt"></i>
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={(_) =>
                        window.open("https://www.instagram.com/backward_space/")
                      }
                    >
                      <i className="fab fa-instagram"></i>
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={(_) =>
                        window.open(
                          "https://www.linkedin.com/in/sayan-maity-6316921a6/"
                        )
                      }
                    >
                      <i className="fab fa-linkedin"></i>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
