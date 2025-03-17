export default function Recipe(props) {

    return (props.recipe &&
        <div className="recipe">
            <h3>Recipe</h3>
            {props.recipe}
            <hr className="horizontal-break" />
        </div>
    )
}