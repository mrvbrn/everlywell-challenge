import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import './App.css';

const App = () => {
  const [mealData, setMealData] = useState([])
  const getMealData = useCallback(async() => {
    try{
      const response = await axios('https://www.themealdb.com/api/json/v1/1/random.php')
      setMealData((prevData) => [...prevData, response.data.meals])
    }catch(err){
      console.log(err)
    }
  },[mealData])
  console.log(mealData)
  useEffect(() => {
    for(let i=0; i<5; i++){
      getMealData()
    } 
  },[])
  return (
    <div className="App">
      {mealData && mealData.map((meal) => {
        return(
          <ul key={meal[0].idMeal}>
          <li><a href={meal[0].strSource}></a></li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
