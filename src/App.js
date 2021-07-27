import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import { Link } from "react-router-dom";

import './App.css';
import SearchBox from "./SearchBox";


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
  },[mealData, getMealData])
  console.log(mealData)
  return (
    <div className="App">
      <SearchBox/>
      <div className="contentOfRecipes">
      <h2 className="headerText">Recipes of the Day</h2>
        {mealData && mealData.map((meal) => {
          return(
            <ol key={meal[0].idMeal} className="mealContainer">
              <li>
                <Link to={`mealName=${meal[0].strMeal}`} className="link">{meal[0].strMeal}</Link>
              </li>
            </ol>
          )
        })}
      </div>
    </div>
  );
}

export default App;

 // <div className="imageContainer">
 //                      <img src={meal[0].strMealThumb} alt={meal.strMeal}/>
 //                    </div>
