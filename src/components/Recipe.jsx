export default function Recipe(props) {

    return (props.recipe &&
        <div className="recipe">
            <hr className="horizontal-break" />
            {props.recipe}
        </div>
    )
}