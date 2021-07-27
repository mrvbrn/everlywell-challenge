import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 

import "./SearchBox.css";


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
    <div className="container">
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Find a recipe" onChange={handleChange} value={searchValue}/>
        <button type="submit" className="searchButton" onClick={handleClick}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="content">
        {mealData && mealData.map((meal) => {
        return(
          <ul key={meal.idMeal}>
            <li>
            <div className="subContent">
              <div>
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
              </div>
              <div className="mealContent">
                <h2>{meal.strMeal}</h2>
                <p className="mealText">{meal.strArea}, {meal.strCategory}</p>
                <Link to={`mealName=${meal.strMeal}`} className="link">
                  <span className="readText">READ MORE</span> <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            </li>
          </ul>
        )
      })}
      </div>
    </div>
  )
}

export default SeachBox;