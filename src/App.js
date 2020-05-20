import React, { Component } from 'react'
import Layout from './components/layout/layout'
import Preloader from './components/preloader/preloader'

 class App extends Component {
   state={
     landing:false
   }
   componentDidMount(){
     setTimeout(() => {
       this.setState({landing:false})
     }, 1600);
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

