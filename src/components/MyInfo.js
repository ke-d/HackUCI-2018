import React from "react";

const MyInfo = (props) => {
    return (
        <div>
        <div className = "padcrazy"></div>
        <h1 className = "paddingleft"> My Info </h1>
        <img classname = "paddingleft profilepicture" src={'http://www.easternbiotech.com/beta/wp-content/uploads/2016/03/Child-Wellness-Profile.jpg'}></img>
        <div className = "paddingleft">{`First Name`}</div>
        <div className = "paddingleft">{`Last Name`}</div>
        <div className = "paddingleft">{`Budget`}</div>
        <div className = "paddingleft">{`E-mail`}</div>
        <div className = "paddingleft">{`Calorie Count`}</div>
        </div >
    )
}



export default MyInfo;


// First / Last Name
//Budget
//Calofira Count