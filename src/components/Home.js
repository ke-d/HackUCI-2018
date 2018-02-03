import React from "react";
import { ListGroup } from 'react-bootstrap';
import Business from "./Business.js";

class Home extends React.Component {
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
    const {data} = this.state;
    return (
      <ListGroup>
        {
          Object.keys(data).length !== 0 &&
            data.businesses.map((element, index) => <Business index={index} businesses={element}/>)
        }
      </ListGroup>
    );
  }
}



export default Home;
