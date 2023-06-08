import React, { Component } from 'react'
import './Counter.css'
import muffins from "./muf.jpeg";
import chip from './pic2.png';

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         muffin:20,
         choco:20
      }

    }


    muffinbuy(){
        this.setState({count:this.state.count+1},()=>{console.log("muffin bought ",this.state.count)})
        this.setState({muffin:this.state.muffin-1})
        
    }
    chocobuy(){
      this.setState({count:this.state.count+1},()=>{console.log("choco bought ",this.state.count)})
      this.setState({choco:this.state.choco-1})

    }
    
  render() {
    return (
      <div className='home'>
      <div className='prods'>
        
        <div className='muffin prod'>
        <img src={muffins} alt="muffin"/>

        <button onClick={()=>{this.muffinbuy()}}>muffin buy</button>
        Muffin -{this.state.muffin}<br></br></div>

        
        <div className='choco prod'>
        <img src={chip} alt="chip"/>
      <button onClick={()=>{this.chocobuy()}}>choco chip buy</button>Chocochip -{this.state.choco}</div>

      </div>
      <center>
      <p id="count">count -{this.state.count}</p>
      </center>
      </div>
        
     
    )
  }
}

export default Counter
