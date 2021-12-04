import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary(props){
let [word, setWord] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] =useState(false);
let [photos, setPhotos] =useState(null);

function handleDictionaryResponse(response){
    setResults(response.data[0]);
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001076b1a8164d54357843eb7bd9699249e";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        let headers= {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
        <Photos photos={photos} />
        </div>
    );
    } else{
        load();
        return "Loading..."
    }
}