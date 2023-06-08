import React, { Component } from 'react'

class Form extends Component {
    state={
        
        month:''
    }

    calculate=()=>{
        let x=document.getElementById("cost").value
        let y=x*0.25
        console.log(y)
        let annual=document.getElementById("annual").value
        let permonth=document.getElementById("per").value
        let p=(annual/12)*permonth
        console.log(p)
        const m=Math.ceil(y/p)
        console.log((m))
        this.setState({
            month:m
        }) 
    }
   
  render() {
    return (
      <form>
        <h1>house</h1>
        <div className='inp'>
        <div className='div'><label>annual salary</label>
        <input type='number'id='annual' ></input></div>
        <div className='div'><label>saving % per month</label>
        <input type='number'id='per' ></input></div>
        <div className='div'><label>dream home cost</label>
        <input type='number' id='cost' onChange={this.calculate}></input></div>
        <div className='div'>months -{this.state.month} </div>
        </div>
        </form>
    )
  }
}

export default Form
