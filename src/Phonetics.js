import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props){
    return (
    <div className="Phonetics">
    <a href={props.phonetics.audio} target="_blank" rel="noreferrer"> 
    <FontAwesomeIcon icon={faPlayCircle} className="audio-icon"/>
</a>
<span className="text">
{props.phonetics.text}
</span>
</div>
    )
}