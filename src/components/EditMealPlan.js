import React from "react";
import {Form, FormGroup, InputGroup, FormControl, Checkbox,Button} from "react-bootstrap";
import {Grid, Row, Col,} from "react-bootstrap";

const EditMealPlan = (props) => {
    return (
        
        <Grid>
            <Row>
                <Col xs={12} md={8}>
                
                <div className = "padcrazy"></div>
                <h1> My Meal Plan </h1>
        <FormGroup>
            <InputGroup>
                
                < InputGroup.Addon>Daily Budget</InputGroup.Addon>
                <span>{"$"}</span>
                <input className = "rightadjust"  type="number"/>
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <InputGroup.Addon>Daily Calorie Limit</InputGroup.Addon>
                <input  className = "rightadjust" type= "number" />

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






export default EditMealPlan;
