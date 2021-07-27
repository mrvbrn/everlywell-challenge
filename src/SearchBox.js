import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 


const SeachBox = () => {
  const [mealData, setMealData] = useState()
  const [searchValue, setSearchValue] = useState("")
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClick = () => {
    setName(searchValue)
  }

  const getMealData = useCallback(async() => {
    try{
      const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      setMealData(response.data.meals)
    
    }catch(err){
      console.log(err)
    }
  },[name])

  useEffect(() => {
    if(name){
      getMealData()
    }
  },[getMealData, name])
  console.log(mealData)

  return(
    <div>
      <input placeholder="search for recipe" value={searchValue} onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
        {mealData && mealData.map((meal) => {
        return(
          <ul key={meal.idMeal}>
            <li>
              <Link to={`mealName=${meal.strMeal}`}>{meal.strMeal}</Link>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default SeachBox;