export default function SavedRecipe(props) {

    return (
        <li className="recipe-list-item"><button className="saved-recipe-button">{props.name}</button></li>
    )

}