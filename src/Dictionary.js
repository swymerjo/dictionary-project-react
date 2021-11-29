import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
let [word, setWord] = useState("");

function handleResponse(response){
    console.log(response.data[0])
}

    function search(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        axios.get(apiUrl).then(handleResponse);
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