import React, { Component } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default class contact extends Component {
  state = {
    name: "",
    email: "",
    isCorrect:false,
    nameFlag : false,
    emailFlag : false,
    error:{
      message:''
    }
  };
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
      isCorrect: false,
    });
    alert("please wait a while 🕑")
    this.sendRequest();
    
    event.preventDefault();
  };
  onHandleChanger = (event) => {
    const { name, value } = event.target;
    let error = this.state.error;
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    switch(name){
      case 'name':
        error.message = value.length<3 ? ' name must be more 3 character':'';
        value.length<3 ? this.setState({nameFlag:false}):this.setState({nameFlag:true})
      break;
      case 'email':
        error.message = validEmailRegex.test(value)
          ? ""
          : "field must be filled correctly";
          
        validEmailRegex.test(value)
          ? this.setState({ emailFlag: true })
          : this.setState({ emailFlag: false });
      break;
      default:
      break;
    }
    this.setState({ [name]: value });
    if(this.state.nameFlag&&this.state.email){
      this.setState({isCorrect:true})
    }
    console.log(this.state.isCorrect);
  };

  sendRequest() {
    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };
    fetch("https://safe-citadel-44687.herokuapp.com/sendmail", reqOp)
      .then((res) => res.json())
      .then((resBack) => {
        console.log(resBack)
        this.setState({
          name: "",
          email: "",
          isCorrect: false,
          nameFlag: false,
          emailFlag: false,
        });
        alert("You've got a mail ✉.Thanks 🙂");
      })
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
          <p className="error">{`${this.state.error.message}`}</p>
          <br />
            <input
              type="submit"
              value="Touch"
              disabled={!this.state.isCorrect}
            />
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
