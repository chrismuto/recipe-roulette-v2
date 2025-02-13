import './App.css'
import { useState } from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Recipe from './components/Recipe';

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
      <div>
      </div>
      <h1>Recipe Roulette</h1>
      <button className="recipe-button" onClick={fetchRecipe}>
        Click here to generate a new recipe!
      </button>
      <Title title = {recipe.strMeal} nationality={recipe.strArea} category = {recipe.strCategory}/>
      <Image youTubeUrl = {recipe.strYoutube} thumbNail = {recipe.strMealThumb} />
      <Recipe recipe = {recipe.strInstructions} />
    </>
  )
}

export default App
