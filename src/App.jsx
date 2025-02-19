import './App.css'
import { useState, useEffect } from 'react';
import Title from './components/Title';
import Image from './components/Image';
import Recipe from './components/Recipe';
import Ingredients from './components/Ingredients';
import SavedRecipeContainer from './components/SavedRecipeContainer';

function App() {

  const [recipe, setRecipe] = useState("")
  const [recipes, setRecipes] = useState(() => {
    const storageRecipes = localStorage.getItem("recipes");
    return storageRecipes ? JSON.parse(storageRecipes) : [];
  })
  
  useEffect(() => {
    const retrievedRecipes = localStorage.getItem("recipes")
    console.log(retrievedRecipes)
  }, [recipes])

  async function fetchRecipe() {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      let json = await response.json();
      setRecipe(json.meals[0])
    } catch (e) {
      console.error(e)
    }
    console.log(recipe)
  }

  function saveRecipe() {
    const newRecipe = {"name": recipe.strMeal, "idMeal": recipe.idMeal}
    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
    setRecipes(prevRecipes => [...prevRecipes, newRecipe])
  }

  return (
    <>
      <h1>Recipe Roulette</h1>
      <button className="recipe-button" onClick={fetchRecipe}>
        Click here to generate a new recipe!
      </button>
      <Title title = {recipe.strMeal} nationality={recipe.strArea} category = {recipe.strCategory}/>
      <Image youTubeUrl = {recipe.strYoutube} thumbNail = {recipe.strMealThumb} />
      <Recipe recipe = {recipe.strInstructions} />
      <Ingredients recipe = {recipe} />
      <hr className="horizontal-break" />
      <SavedRecipeContainer recipe = {recipe} recipes = {recipes} saveRecipe = {saveRecipe} setRecipe={setRecipe} />
    </>
  )
}

export default App
