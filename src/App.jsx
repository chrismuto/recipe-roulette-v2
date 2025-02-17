import './App.css'
import { useState } from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Recipe from './components/Recipe';
import Ingredients from './components/Ingredients';
import SavedRecipeContainer from './components/SavedRecipeContainer';

function App() {

  const [recipe, setRecipe] = useState("")
  
function fetchRecipe() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => setRecipe(data.meals[0]))
    console.log(recipe)
}
  

  return (
    <>
      <h1>Recipe Roulette</h1>
      <button className="recipe-button" onClick={fetchRecipe}>
        Click here to generate a new recipe!
      </button>
      <Title title = {recipe.strMeal} nationality={recipe.strArea} category = {recipe.strCategory}/>
      <hr className="horizontal-break" />
      <Image youTubeUrl = {recipe.strYoutube} thumbNail = {recipe.strMealThumb} />
      <hr className="horizontal-break" />
      <Recipe recipe = {recipe.strInstructions} />
      <Ingredients recipe = {recipe} />
      <hr className="horizontal-break" />
      <SavedRecipeContainer />
    </>
  )
}

export default App
