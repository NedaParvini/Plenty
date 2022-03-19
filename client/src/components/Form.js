import React, { useEffect } from "react";
//import { ComboBox } from "@progress/kendo-react-dropdowns";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import '@progress/kendo-theme-default/dist/all.css';

function Form() {
  //added here
  useEffect(() => {
    // api to call ingredients
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then(response => response.json()) 
    .then(norm => {
      const ingredientsName = norm.meals.map(ing => ing.strIngredient)
      setIngredients(ingredientsName)
      
    })
    .catch(error => {
      console.log(error)
    })
    

  }, []) // DO NOT DELETE THE EMPTY ARRAY!!!! LEAVE IT THERE!!!!!!!!!!


  
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const onIngredientChange = event => setSelectedIngredients([...event.value])
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const onChange = event => setSelectedAssignee(event.value);
  const [meals, setMeals] = useState([])
  // on submit function/ take selected ingredients and send it to our other api, then render results.
  return (
    <div className="form">
      <div className="container">
        <h1>Form</h1>
        {/* HERE IS THE CALL BACK FROM THE SELECTED LIST AND RECIPE RESULTS */}
    <form onSubmit={e => e.preventDefault()}>
      <label className="k-label k-mb-3">Choose your ingredients</label>
      <MultiSelect data={ingredients} value={selectedIngredients} onChange={onIngredientChange} autoClose = {false}></MultiSelect>
      <button onClick={ () => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredients.join(',')}`)
      .then(response => response.json())
      .then(recipes => {
        console.log(recipes)
        setMeals(recipes.meals)
      })
      .catch(error => console.log(error))}>Submit</button>
      {
      meals !== undefined && meals.length > 0 
      ? meals.map(meal => (
        <div onClick={
        () => {
            console.log('here is meal id: ', meal.idMeal)
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        .then(response => {
          return response.json()
        })
        .then(foo => console.log(foo)) // this recipe result!!!
      }
        }>{meal.strMeal}
        </div>
        ))
      : null
      }
    </form>
      </div>
    </div>
  );
}
export default Form;