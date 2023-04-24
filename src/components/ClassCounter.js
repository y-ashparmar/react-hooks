import React, { Component } from 'react'

export class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0,
       name: ''
    }

  }
  incrementCount = ()=> {
    this.setState(preState =>{
      return {count: preState.count + 1}
    } 
    ) 
  }
  componentDidMount(){
    document.title = `click ${this.state.count} time`;
  }
  componentDidUpdate(preProp, preState){
    console.log("call didUpdate")
    if(preState.count !== this.state.count){
      document.title =  `click ${this.state.count} time`;
      console.log("didUpdate")
    }

  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
        <button onClick={this.incrementCount}>Click {this.state.count} time</button>
      </div>
    )
  }
}

export default ClassCounter