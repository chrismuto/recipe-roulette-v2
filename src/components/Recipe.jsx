export default function Recipe(props) {

    return (
        <div className="recipe">
            <hr className="horizontal-break" />
            {props.recipe}
        </div>
    )
}