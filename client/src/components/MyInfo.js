import React from "react";
import {Grid, Row, Col,} from "react-bootstrap";

const MyInfo = (props) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={8}>
        <div className = "padcrazy"></div>
        <h1 className = "paddingleft"> My Info </h1>
        <div className = "paddingleft">{`First Name: Lydia`}</div>
        <div className = "paddingleft">{`Last Name: Albert`}</div>
        <div className = "paddingleft">{`Budget: ${localStorage.getItem("budget") === null ? 0: localStorage.getItem("budget")}`}</div>
        <div className = "paddingleft">{`E-mail: lyalbert2018@gmail.com`}</div>
        <div className = "paddingleft">{`Calorie Count: ${localStorage.getItem("calorie") === null ? 0: localStorage.getItem("calorie")}`}</div>
        </Col>
    </Row>
    </Grid>
    )
}

export default MyInfo;


// First / Last Name
//Budget
//Calofira Count
