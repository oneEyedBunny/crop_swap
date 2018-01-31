import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./header";
import LogIn from "./logging";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <LogIn />
        </Header>
        <LogIn />
      </div>
    );
  }
}

export default App;
