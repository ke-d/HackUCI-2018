import React, { Component } from 'react';
import './App.css';
import Business from "./components/Business.js";
import NavBarHeader from "./navigation/NavBarHeader.js";
import Routes from "./navigation/Routes.js";
import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <Router>
        <div>
        <NavBarHeader />
        <div style={{marginTop: "50px"}}>
          <Routes state={this.state} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
