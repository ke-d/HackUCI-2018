import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../components/Home.js";
import EditMealPlan from "../components/EditMealPlan.js";
import myInfo from "../components/MyInfo.js";
import About from "../components/About.js";

const Routes = (props) =>
  [
    <Route exact path="/" component={Home} />,
		<Route exact path="/editmealplan" component={EditMealPlan} />,
    <Route exact path="/myInfo" component={myInfo} />,
    <Route exact path="/about" component={About} />
  ]

export default Routes;
