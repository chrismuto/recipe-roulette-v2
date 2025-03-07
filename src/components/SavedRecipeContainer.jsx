import SavedRecipe from "./fragments/SavedRecipe"

export default function SavedRecipes(props) {

    const addRecipe = () => {
        props.saveRecipe()
    }

    const recipeButtons = props.recipes.map((recipe) => {
        return <SavedRecipe name = {recipe.name} mealId = {recipe.idMeal} setRecipe = {props.setRecipe}/>
    })

    return (
        <div className="saved-recipe-container"> 
            <button onClick={addRecipe} class="save-recipe-button">Save this Recipe</button>
            <h3>Saved Recipes</h3>
            <ul className="recipe-list">
                {recipeButtons}
            </ul>
        </div>
    )

}