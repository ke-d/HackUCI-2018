import React from "react";
import { ListGroup, Button, ButtonToolbar, Alert, Grid, Row, Col } from 'react-bootstrap';
import Business from "./Business.js";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: ""
    }
  }
  componentDidMount() {
    fetch(`/testData`)
    .then(results => results.json())
    .then(data => this.setState({data}))
    .catch(error => this.setState({error: "An error has occured. Sorry!"}));
  }

  getDateString() {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth()+1}`
  }



  render() {
    const {data, error} = this.state;
    if (error !== "") {
      return (
        <Grid>
          <Row>
            <Col>
            <Alert bsStyle="danger">{error}</Alert>
            </Col>
          </Row>

        </Grid>

      )
    }
    return (
       <Grid>
        <Row>
          <Col>
          <table style={{marginLeft: "20px", width:"80%"}}>
           <tr>
             <th>Date</th>
             <th>Calorie Limit</th>
             <th>Budget</th>
           </tr>
           <tr>
             <td>{this.getDateString()}</td>
             <td>{localStorage.getItem("calorie") === null ? 0: localStorage.getItem("calorie")}</td>
             <td>{`$${localStorage.getItem("budget") === null ? 0 : localStorage.getItem("budget")}`}</td>
           </tr>
           <tr>
             <td></td>
             <td><Button bsStyle="danger" href={Object.keys(data).length !== 0 ? data.businesses[Math.floor(Math.random() * data.businesses.length)].url : ""}>{"I Don't Know where to eat"}</Button>
              </td>
             <td></td>
           </tr>
          </table>
          <ListGroup>
            {
              Object.keys(data).length !== 0 &&
                data.businesses.map((element, index) => <Business index={index} businesses={element}/>)
            }
          </ListGroup>
          </Col>
        </Row>

       </Grid>
    );
  }
}



export default Home;
