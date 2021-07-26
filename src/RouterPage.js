import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Recipes from "./Recipes";
import App from "./App";


const RouterPage = () => {
  return (
    <Router>
      <div>
          <Route exact path="/" component={App} />
          <Route path="/mealName:mealName" component={Recipes} />
      </div>
    </Router>
  )
}


export default RouterPage;