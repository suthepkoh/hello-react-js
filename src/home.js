import React, { Component } from "react";

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div style={{ padding: 30 }}>
        <h1 style ={{color: "red", backgroundColor: 'yellow'}}>Login</h1>
        <form>
          <label htmlFor="fname">Username:</label>
          <br />
          <input
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
            type="text"
            id="username"
            name="username"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password:</label>
          <br />
          <input
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            type="text"
            id="password"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
        <span>#debug: {JSON.stringify(this.state)}</span>
          <button onClick={()=>{
              alert(JSON.stringify(this.state))
          }} >Login</button>
          {/* Update ตัวแปลใน State */}
        </form>
      </div>
    );
  }
}
