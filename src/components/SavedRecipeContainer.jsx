import SavedRecipe from "./fragments/SavedRecipe"

export default function SavedRecipes() {

    return (
        <div className="saved-recipe-container"> 
            <h3>Saved Recipes</h3>
            <ul className="recipe-list">
                <SavedRecipe name="This is a very long name that should overflow" />
                <SavedRecipe name="name" />
                <SavedRecipe name="name" />
                <SavedRecipe name="name" />
                <SavedRecipe name="name" />
            </ul>
        </div>
    )

}