import React, { Component } from 'react'

class Form extends Component {
   state={
    unit:'',
    tc:'',
    fc:'',
    sc:'',nc:'',na:''
   }
   
   even=()=>{
    let x=document.getElementById("input").value
    let y
    if(x>0 && x<=100){
      y=0
    }else if((x>100 && x<=200)){
      if(x>150){
        y=3.75*(x-150)+100
      }else{
        y=100
      }
    }
    else if((x>200 && x<=400)){
      if(x>350){
        y=4*(x-350)+250
      }else{
        y=250
      }
    }
    else if((x>400 && x<=600)){
      if(x>450){
        y=4.25*(x-450)+300
      }else{
        y=300
      }
    }
    else if((x>600)){
      if(x>600){
        y=5*(x-600)+400
      }else{
        y=400
      }
    }
    
    this.setState({
      tc:y,
      fc:50,
      sc:0.0,
      nc:250,
      na:this.state.tc+this.state.fc-this.state.nc
    })
   }

   
   

   
  
    
  render() {
    return (
        <form >
      <div className='inp'><label>Consumed units</label>
      <input type="number" id='input' onChange={this.even}></input></div>
      <div className='inp'><label>total current charges </label><span>{this.state.tc}</span></div>
      <div className='inp'><label>current charges rs </label><span> {this.state.tc}</span></div>
      <div className='inp'><label>fixed cost </label> <span>{this.state.fc}</span></div>
      <div className='inp'><label>subsidy fixed cost </label> <span>{this.state.sc}</span></div>
      <div className='inp'><label>new subsidy</label> <span>{this.state.nc}</span></div>
      <div className='inp'><label>net amount rs</label> <span>{this.state.na}</span></div>




      



      </form>
      
    )
  }
}

export default Form
