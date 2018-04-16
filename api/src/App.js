import React, { Component } from 'react';
import Main from './router/main';
import Nav from './router/nav';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="continer-box">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
