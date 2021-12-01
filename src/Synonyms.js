import React from "react";

export default function Synonyms(props){
    if(props.synonyms) {
    return (
        <ul className="Synonyms">
        {props.synonyms.map(function(synonym, index) { //checking for synonyms then looping through each
            return <li key={index}>{synonym}</li>; //for each, display synonym in a list form
        })}
        </ul>
        );
    }
    else {
        return null; // if no synonym then return nothing
    }
}