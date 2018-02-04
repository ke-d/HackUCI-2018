import React from "react";
import {Grid, Row, Col,} from "react-bootstrap";

const MyInfo = (props) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={8}>
        <div className = "padcrazy"></div>
        <h1 className = "paddingleft"> My Info </h1>
        <img classname = "paddingleft profilepicture" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'}></img>
        <div className = "paddingleft">{`First Name`}</div>
        <div className = "paddingleft">{`Last Name`}</div>
        <div className = "paddingleft">{`Budget`}</div>
        <div className = "paddingleft">{`E-mail`}</div>
        <div className = "paddingleft">{`Calorie Count`}</div>
        
        </Col>
    </Row>
    </Grid> 
    )
}



export default MyInfo;


// First / Last Name
//Budget
//Calofira Count