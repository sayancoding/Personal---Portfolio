import React, { Component } from 'react'
import Layout from './components/layout/layout'
import Preloader from './components/preloader/preloader'
import $ from 'jquery'
 class App extends Component {
   state={
     landing:true
   }
   componentDidMount(){
     setTimeout(() => {
       this.setState({landing:false})
     }, 2000);
   }
  render() {
    
    return (
      <div>
        {
          this.state.landing &&
        <Preloader/>
        }
        {!this.state.landing &&
        <Layout/>
        }
      </div>
    )
  }
}

export default App;

