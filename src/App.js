import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import './App.css';

const App = () => {
  const [mealData, setMealData] = useState([])

  const getMealData = useCallback(async() => {
    try{
      const response = await axios('https://www.themealdb.com/api/json/v1/1/random.php')
      if(!mealData.includes(response.data.meals)){
         setMealData((prevData) => [...prevData, response.data.meals])
      }  
    }catch(err){
      console.log(err)
    }
  },[mealData])
  console.log(mealData)
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
          <li><a href={meal[0].strSource ? meal[0].strSource : meal[0].strYoutube } target="_blank">{meal[0].strSource ? meal[0].strSource : meal[0].strYoutube}</a></li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
