import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../components/Home.js";
import EditMealPlan from "../components/EditMealPlan.js";


const Routes = (props) =>
  [
    <Route exact path="/" component={Home} />,
		<Route exact path="/editmealplan" component={EditMealPlan} />
  ]

export default Routes;
