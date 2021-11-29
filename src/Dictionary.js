import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
let [word, setWord] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${word} definition`);
    }

    function handleWordChange(event){
        setWord(event.target.value);
    }
    
    return (
        <div className="Dictionary mt-3">
        <form onSubmit={search}>
        <input type="search" autoFocus={true} placeholder="Search..." onChange={handleWordChange} />
        <input type="submit" className="submit-button ms-2"/>
        </form>
        </div>
    );
}