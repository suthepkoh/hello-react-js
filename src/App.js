import React, { Component } from "react";

export default class App extends Component {
  count = 5;

  constructor(props) {
    super(props)
  
    this.state = {
       clock: 0
    }
  }
  // state change render run
  render() {
    let a = 5;
    return (
      <div>
        {/* i love react  ctrl + /*/}
        <h1>Hello React {Math.random() + a}</h1>
        <h1>number {1 + a}</h1>
        <h1 onClick={()=>{
          this.count++;
          this.setState({clock: this.state.clock + 1 })
          console.log("Count: " + this.count);
          <h1>Helllllo</h1>
        }}>count {this.count}</h1>
      </div>
    );
  }
}
