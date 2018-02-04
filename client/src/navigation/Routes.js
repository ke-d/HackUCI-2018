import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../components/Home.js";
import EditMealPlan from "../components/EditMealPlan.js";
import myInfo from "../components/MyInfo.js";

const Routes = (props) =>
  [
    <Route exact path="/" component={Home} />,
		<Route exact path="/editmealplan" component={EditMealPlan} />,
    <Route exact path="/myInfo" component={myInfo} />
  ]

export default Routes;
