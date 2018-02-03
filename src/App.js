import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from "./components/Business.js"
import { ListGroup } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080/testdata")
    .then(results => results.json())
    .then(data => this.setState({data}));
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <ListGroup>
          {
            Object.keys(this.state.data).length !== 0 &&
              this.state.data.businesses.map(element => <Business businesses={element}/>)
          }
        </ListGroup>
        </p>
      </div>
    );
  }
}

export default App;
