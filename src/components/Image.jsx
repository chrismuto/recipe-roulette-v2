import { useState, useEffect } from 'react';
import recipe from '../App.jsx'

export default function Image(props) {

    const [youTubeUrl, setYouTubeUrl] = useState("")

    useEffect (() => {
        if (props.youTubeUrl) {
            var firstSplit = props.youTubeUrl.split("watch");
            var secondSplit = firstSplit[1].split("=");
            setYouTubeUrl(firstSplit[0] + "embed/" + secondSplit[1]);
        }
    }, [props.youTubeUrl]);

    function Video() {
        return (
            <iframe title="youtube video" src={youTubeUrl}></iframe>
        )
    }

    function Image() {
        return <img src={props.thumbNail} alt="recipe image"></img>
    }

    return (
        <div>
            {props.youTubeUrl ? <Video /> : <Image />}
        </div>
    )
}