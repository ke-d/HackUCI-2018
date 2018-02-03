import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from "./components/Business.js";
import NavBarHeader from "./navigation/NavBarHeader.js";
import Routes from "./navigation/Routes.js";
import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {

  render() {
    console.log(this.state);
    return (
      <Router>
        <div>
        <NavBarHeader />
        <div style={{marginTop: "50px"}}>
          <Routes />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
