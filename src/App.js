import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import { Link, Route
} from "react-router-dom";

import './App.css';
import Recipes from "./Recipes";


const App = () => {
  const [mealData, setMealData] = useState([])

  const getMealData = useCallback(async() => {
    try{
      const response = await axios('https://www.themealdb.com/api/json/v1/1/random.php')
      const filtereData = mealData.filter(mdata => mdata.idMeal !== response.data.meals[0].idMeal)
      if(filtereData){
        setMealData((prevData) => [...prevData, response.data.meals]) 
      }
    
    }catch(err){
      console.log(err)
    }
  },[mealData])

  useEffect(() => {
    if(mealData.length < 5){
      getMealData()
    }
  },[mealData])

  return (
    <div className="App">
      {mealData && mealData.map((meal) => {
        return(
          <ul key={meal[0].idMeal}>
            <li>
              <Link to={`mealName=${meal[0].strMeal}`}>{meal[0].strMeal}</Link>
            </li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
