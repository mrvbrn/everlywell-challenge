import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import { useLocation } from "react-router-dom";

import "./Recipes.css"
const queryString = require('query-string');

const Recipes = (props) => {
  const [mealData, setMealData] = useState()

  const location = useLocation()
  const parsed = queryString.parse(location.pathname);
  const name = parsed["/mealName"]


  const getMealData = useCallback(async() => {
    try{
      const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      setMealData(response.data.meals)
    
    }catch(err){
      console.log(err)
    }
  },[setMealData, name])

  useEffect(() => {
    getMealData()
  },[getMealData])

  console.log(mealData)
  return(
    <div className="recipeContainer">
      {mealData && 
      <div className="mealNameContainer">
        <h1 className="mealName">{mealData[0]. strMeal}</h1>
        <div className="recipeContent">
          <div className="recipeSubContent">
            <div className="recipeImageContainer">
              <img src={mealData[0].strMealThumb} alt={mealData[0]. strMeal}/>
            </div>
            <div className="ingredientsContent">
            <p className="subHeaderText">Ingredients</p>
            <div className="ingredientsText">
            {mealData[0].strIngredient1 && <li>{mealData[0].strIngredient1} </li>}
            {mealData[0].strIngredient2 && <li>{mealData[0].strIngredient2} </li>}
            {mealData[0].strIngredient3 && <li>{mealData[0].strIngredient3} </li>}
            {mealData[0].strIngredient4 && <li>{mealData[0].strIngredient4}</li>}
            {mealData[0].strIngredient5 && <li>{mealData[0].strIngredient5}</li>}
            {mealData[0].strIngredient6 && <li>{mealData[0].strIngredient6}</li>}
            {mealData[0].strIngredient7 && <li>{mealData[0].strIngredient7}</li>}
            {mealData[0].strIngredient8 && <li>{mealData[0].strIngredient8}</li>}
            {mealData[0].strIngredient9 && <li>{mealData[0].strIngredient9}</li>}
            {mealData[0].strIngredient10 && <li>{mealData[0].strIngredient10}</li>}
            {mealData[0].strIngredient11 && <li>{mealData[0].strIngredient11}</li>}
            {mealData[0].strIngredient12 && <li>{mealData[0].strIngredient12}</li>}
            {mealData[0].strIngredient13 && <li>{mealData[0].strIngredient13}</li>}
            {mealData[0].strIngredient14 && <li>{mealData[0].strIngredient14}</li>}
            {mealData[0].strIngredient15 && <li>{mealData[0].strIngredient15}</li>}
            {mealData[0].strIngredient16 && <li>{mealData[0].strIngredient16}</li>}
            {mealData[0].strIngredient17 && <li>{mealData[0].strIngredient17}</li>}
            {mealData[0].strIngredient18 && <li>{mealData[0].strIngredient18}</li>}
            {mealData[0].strIngredient19 && <li>{mealData[0].strIngredient19}</li>}
            {mealData[0].strIngredient20 && <li>{mealData[0].strIngredient20}</li>}
            </div>
            </div>
           
          </div>
          <div className="instructionsContent">
          <p className="subHeaderText">Instructions</p>
            {(mealData[0].strInstructions.split('.')).slice(0,(mealData[0].strInstructions.split('.').length-1)).map((inst)=>{
              return(
                <ul>
                  <li>{inst}.</li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
      }
   </div>
  )
}


export default Recipes;



     // <div>{props.strMeal}</div>
      // <div>{props.strArea}, {props.strCategory}</div> 
      // <div>
      //   <li>{props.strIngredient1 !== "" && props.strIngredient1 }</li>
      //   <li>{props.strIngredient2 !== "" && props.strIngredient2 }</li>
      //   <li>{props.strIngredient3 !== "" && props.strIngredient3 }</li>
      //   <li>{props.strIngredient4 !== "" && props.strIngredient4 }</li>
      //   <li>{props.strIngredient5 !== "" && props.strIngredient5 }</li>
      //   <li>{props.strIngredient6 !== "" && props.strIngredient6 }</li>
      //   <li>{props.strIngredient7 !== "" && props.strIngredient7 }</li>
      //   <li>{props.strIngredient8 !== "" && props.strIngredient8 }</li>
      //   <li>{props.strIngredient9 !== "" && props.strIngredient9 }</li>
      // </div>
      // <div>{props.strInstructions}</div>