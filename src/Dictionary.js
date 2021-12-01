import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
let [word, setWord] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] =useState(false);

function handleResponse(response){
    setResults(response.data[0]);
}

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange(event){
        setWord(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    if(loaded){
    return (
        <div className="Dictionary">
        <section>
        <h3>
              What word do you want to look up?
            </h3>
        <form onSubmit={handleSubmit}>
        <input className="" type="search" autoFocus={true} placeholder="Search..." onChange={handleWordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
            suggested words: sunset, yoga, plants, house...
        </div>
        </section>
        <Results results={results}/>
        </div>
    );
    } else{
        load();
        return "Loading..."
    }
}