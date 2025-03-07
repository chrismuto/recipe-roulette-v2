export default function SavedRecipe(props) {

    async function getSavedRecipe() {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + props.mealId);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            let json = await response.json();
            props.setRecipe(json.meals[0])
        } catch (e) {
          console.error(e)
        }
    }

    const deleteRecipe = (id) => {
      props.deleteRecipe(props.mealId)
    }

    return (
        <li className="recipe-list-item"><button className="saved-recipe-button" onClick={getSavedRecipe}>{props.name}</button><button className="delete-recipe-button" onClick={deleteRecipe}>X</button></li>
    )

}