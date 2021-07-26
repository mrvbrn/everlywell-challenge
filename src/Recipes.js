import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'; 
import { useLocation } from "react-router-dom";
const queryString = require('query-string');


const Recipes = (props) => {
  const [mealData, setMealData] = useState()

  const location = useLocation()
  const parsed = queryString.parse(location.pathname);
  const name = parsed["/mealName"]
  console.log(parsed["/mealName"]);


  const getMealData = useCallback(async() => {
    try{
      const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      console.log(response.data.meals)
      setMealData(response.data.meals)
    
    }catch(err){
      console.log(err)
    }
  },[setMealData])

  useEffect(() => {
    getMealData()
  },[getMealData])


  return(
    <div>
      {mealData && 
      <div>
        {mealData[0].strIngredient1 && <li>{mealData[0].strIngredient1} </li>}
        {mealData[0].strIngredient2 && <li>{mealData[0].strIngredient2} </li>}
        {mealData[0].strIngredient3 && <li>{mealData[0].strIngredient3} </li>}
        {mealData[0].strIngredient4 && <li>{mealData[0].strIngredient4}</li>}
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