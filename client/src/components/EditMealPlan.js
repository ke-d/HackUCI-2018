import React from "react";
import {Form, FormGroup, InputGroup, FormControl, Checkbox,Button} from "react-bootstrap";
import {Grid, Row, Col,} from "react-bootstrap";

class EditMealPlan extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        budget: localStorage.getItem("budget"),
        calorie:localStorage.getItem("calorie")
      };
    }

    onChangedValue(key, value) {
      localStorage.setItem(key, value);
      let newObject = {};
      newObject[key] = value;
      this.setState(newObject);
    }

    render() {
      const {budget, calorie} = this.state;
      console.log(budget, calorie);
      return (

          <Grid>
              <Row>
                  <Col xs={12} md={8}>

                  <div className = "padcrazy"></div>
                  <h1> My Meal Plan </h1>
          <FormGroup>
              <InputGroup>

                  <InputGroup.Addon>Daily Budget</InputGroup.Addon>
                  <span>{"$"}</span>
                  <input onChange={(e) => this.onChangedValue("budget", e.target.value)} value={budget} className = "rightadjust"  type="number"/>
              </InputGroup>
          </FormGroup>
          <FormGroup>
              <InputGroup>
                  <InputGroup.Addon>Daily Calorie Limit</InputGroup.Addon>
                  <input onChange={(e) => this.onChangedValue("calorie", e.target.value)} value={calorie} className = "rightadjust" type= "number" />

          </InputGroup>
        </FormGroup>


        <div className = " leftadjust" >{`Allegies:`}</div>
      <Checkbox>
          Vegan
      </Checkbox>
      <Checkbox>
          Nuts
      </Checkbox>
      <Checkbox>
          Vegeterian
      </Checkbox>
      <Checkbox>
          Seafood
      </Checkbox>

      <Button type="submit">Submit</Button>
      </Col>
      </Row>
      </Grid>
      )
    }
}






export default EditMealPlan;
