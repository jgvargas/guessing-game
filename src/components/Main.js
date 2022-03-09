/*
    Use API to init the topics before changing api call string
*/

import React, { useEffect, useState } from "react";
import GuessingGame from "./GuessingGame";

export default function Main(){
    const baseApiUrl = "https://swapi.dev/api/"

    // Game vairables
    let [StarWarsData, setStarWarsData] = useState({})
    let [currentPageUrl, setCurrentPageUrl ] = useState("https://swapi.dev/api/")
    let [playerData, setPlayerData] = useState({
        isTopicSelected: false,
        selectedTopic: ""
    })
    
    // Api call
    useEffect( () =>{
        fetch(currentPageUrl)
        .then(res => res.json() )
        .then( data => setStarWarsData(data) )
        console.log("USe Effect running..")
    }, [currentPageUrl] )

    function test() {
        console.log(currentPageUrl)
        console.log(StarWarsData)
        console.log(playerData.isTopicSelected)
    }

    // Get keys from API call to create radio elements array
    let dataKeys = Object.keys(StarWarsData)

    function topicClick(event){
        if(playerData.isTopicSelected === false) {
            setPlayerData( prevPlayerData => ({
                ...prevPlayerData,
                isTopicSelected: !prevPlayerData.isTopicSelected,
                selectedTopic: event.target.textContent
            }))
            setCurrentPageUrl(`${baseApiUrl}${event.target.textContent}/`)
            console.log("Running @ click event")
        }
        else {
            setPlayerData( prevPlayerData => ({
                ...prevPlayerData,
                isTopicSelected: !prevPlayerData.isTopicSelected,
                selectedTopic: ""
            }))
            setCurrentPageUrl(baseApiUrl)
            console.log("Quitting @ click event")
        }
    }

    let dataElements = dataKeys.map( topic => (
        <p key={topic} onClick={topicClick}>
            {topic}
        </p>
    ))
    
    return(
        <main>
            <div className="container">
                {!playerData.isTopicSelected && 
                    <>
                        <h1>Select a topic</h1>
                        {dataElements}
                    </>
                }
                
                {playerData.isTopicSelected && 
                    <>
                        <GuessingGame topicUrl={currentPageUrl}/>
                        <button onClick={topicClick}>Quit game</button>
                    </>
                }

                <button onClick={test}>Console log</button>
            </div>
        </main>
    )
}