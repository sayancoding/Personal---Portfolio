import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
  render() {
    return (
      <div>
        <p className="tiny-text">Hey, my name is</p>
        <div className="upper-text">Sayan Maity.</div>
        <div className="middle-text">I use to think to build through web.</div>
      </div>
    );
  }
}
