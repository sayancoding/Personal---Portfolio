import React, { Component } from 'react'
import Header from './header/header'
import About from './aboutMe/aboutMe'

export default class home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
      </div>
    )
  }
}
