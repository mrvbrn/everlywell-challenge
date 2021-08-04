import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import { Link } from "react-router-dom";

import './App.css';


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
      <div className="contentOfRecipes">
      <h2 className="headerText">Recipes of the Day</h2>
        {mealData && mealData.map((meal) => {
          return(
            <div key={meal[0].idMeal} className="mealContainer">
              <div className="mealContent">
                <h3>{meal[0].strMeal}</h3>
                <p className="categoryText">{meal[0].strArea}, {meal[0].strCategory}</p>
                <Link to={`mealName=${meal[0].strMeal}`} className="link"><span className="readText">READ MORE</span> <i className="fa fa-arrow-right"></i></Link>
              </div>
              <div className="dayOfRecipesImage">
                <img src={meal[0].strMealThumb} alt={meal[0].strMeal}/>
              </div>
            </div>
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
