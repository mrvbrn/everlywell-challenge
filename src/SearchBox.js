import React, { useState, useEffect, useCallback } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Link } from "react-router-dom";
import axios from 'axios'; 

import "./SearchBox.css";
import App from "./App";


const SeachBox = () => {
  const [mealData, setMealData] = useState()
  const [searchValue, setSearchValue] = useState("")
  const [name, setName] = useState("")
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClick = () => {
    setName(searchValue)
    setSearchValue("")
  }

  const handleClickMobile = () => {
    setName(searchValue)
    setShowKeyboard(!showKeyboard)
    setSearchValue("")
  }

  const handleKeyboard = button => {
    if (button === "{enter}"){
       setName(searchValue)
       setShowKeyboard(false)
    } 
  }
  const handleKeyboardChange = searchValue =>{
    setSearchValue(searchValue)
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
      setIsLoading(true)
      getMealData().then(() => setIsLoading(false))
    }
  },[getMealData, name])
  console.log(mealData)

  if(isLoading){
    return(
      <div className="text">Loading...</div>
    )
  }

  if(name && !mealData){
    return(
      <div className="text">
      There is no recipes with this name
      <button onClick={() => setName("")}>Main Page</button>
      </div>
    )
  }

  return(
    <div className={showKeyboard ? "keyboardContainer" :"container"}> 
      <div className="subContainer">
        {mealData ? mealData.map((meal) => {
        return(
          <ul key={meal.idMeal}>
            <li>
            <div className="subContent">
              <div>
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
              </div>
              <div className="searchContent">
                <h2>{meal.strMeal}</h2>
                <p className="categoryText">{meal.strArea}, {meal.strCategory}</p>
                <Link to={`mealName=${meal.strMeal}`} className="link">
                  <span className="readText">READ MORE</span> <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            </li>
          </ul>
        )
      })
      :
      <App/> }
      <div>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Find a recipe" onChange={handleChange} value={searchValue}/>
          <button type="submit" className="searchButton" onClick={handleClick}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="searchMobile">
          <button type="submit" className="searchButtonMobile" onClick={handleClickMobile}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div> 
      {showKeyboard &&
        <div className="keyboardContainer">
          <input type="text" className="searchTermMobile" placeholder="Find a recipe" onChange={handleChange} value={searchValue}/>
          <div className="keyboard">
            <Keyboard
              onChange={handleKeyboardChange}
              onKeyPress={handleKeyboard}
              onClick={handleClick}
            />
          </div>
        </div>}
      </div>
    </div>
  )
}

export default SeachBox;