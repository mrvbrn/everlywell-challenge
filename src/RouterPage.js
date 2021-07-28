import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Recipes from "./Recipes";
import SearchBox from "./SearchBox";


const RouterPage = () => {
  return (
    <Router>
      <div>
          <Route exact path="/" component={SearchBox} />
          <Route path="/mealName:mealName" component={Recipes} />
      </div>
    </Router>
  )
}


export default RouterPage;