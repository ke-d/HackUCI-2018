import React from "react";
import { ListGroup, Button, ButtonToolbar } from 'react-bootstrap';
import Business from "./Business.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    fetch(`/testData`)
    .then(results => results.json())
    .then(data => this.setState({data}));
  }



  render() {
    const {data} = this.state;

    return (
      <ListGroup> <h1 style={{marginLeft: "200px"}}>Places you can go</h1>
      <table style={{marginLeft: "20px", width:"80%"}}>
       <tr>
         <th>Date</th>
         <th>Calorie Limit</th>
         <th>Budget</th>
       </tr>
       <tr>
         <td>12/12/12</td>
         <td>{localStorage.getItem("calorie") === null ? 0: localStorage.getItem("calorie")}</td>
         <td>{localStorage.getItem("budget") === null ? 0 : localStorage.getItem("budget")}</td>
       </tr>
      </table>
      <ButtonToolbar>
       <Button bsStyle="danger" href={Object.keys(data).length !== 0 ? data.businesses[Math.floor(Math.random() * data.businesses.length)].url : ""} style={{marginLeft: "800px"}}>{"I Don't Know where to eat"}</Button>
       </ButtonToolbar>
        {
          Object.keys(data).length !== 0 &&
            data.businesses.map((element, index) => <Business index={index} businesses={element}/>)
        }
      </ListGroup>
    );
  }
}



export default Home;
