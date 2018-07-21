import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from "./time";

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Some thing is coming!</h1>
          </header>
          <br/>
          <Time/>
      </div>
    );
  }
}

export default App;
