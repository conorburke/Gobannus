import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Gobannus</h2>
        </div>
        <a href="/auth/google">Sign In with Google</a>
      </div>
    );
  }
}

export default App;
