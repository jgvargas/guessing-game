/*
    Use API to init the topics before changing api call string
*/

import React, { useEffect, useState } from "react";
import GuessingGame from "./GuessingGame";
import Radio from "./Radio";

export default function Main(){

    // DELETE after complete
    function test() {
        console.log(StarWarsData)
        console.log(currentPageUrl)
        console.log(playerData)
    }

    // Game vairables
    const baseApiUrl = "https://swapi.dev/api/"
    let [StarWarsData, setStarWarsData] = useState({})
    let [currentPageUrl, setCurrentPageUrl ] = useState(baseApiUrl)
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

    function startGame () {
        console.log("Inside @ startGame")
        // Check if topic is selected
        if(playerData.selectedTopic !== "") {
            setCurrentPageUrl(`${baseApiUrl}${playerData.selectedTopic}/`)
            setPlayerData( prevPlayerData => ({
                ...prevPlayerData,
                isTopicSelected: !prevPlayerData.isTopicSelected
            }))
        }
    }

    function quitGame(event){
        setCurrentPageUrl(baseApiUrl)
        setPlayerData( {
            isTopicSelected: false,
            selectedTopic: ""
         })
         console.log("Inside @ quitGame")
    }

    function handleRadioChange (event) {
        const {value} = event.target
        setPlayerData( prevPlayerData => ({
            ...prevPlayerData,
            selectedTopic: value
        }))
        console.log("Inside handle radio change")
    }

    // Get keys from API call to create radio elements array
    let dataKeys = Object.keys(StarWarsData)
    let radioElements = dataKeys.map( topic => (
        <Radio 
            key={topic}
            topic={topic}
            onChange={handleRadioChange}
        />
    ))
    
    return(
        <main>
            <div className="container">
                {!playerData.isTopicSelected && 
                    <>
                        <h1 className="text-center">Select a topic</h1>
                        <div className="split">
                            {radioElements}
                        </div>
                        <button onClick={startGame}>Select Topic</button>
                    </>
                }
                
                {playerData.isTopicSelected && 
                    <>
                        <GuessingGame 
                            apiUrl={currentPageUrl} 
                            topicData={StarWarsData}
                            player={playerData}
                        />
                        <button className="text-center" onClick={quitGame}>Quit game</button>
                    </>
                }

                <button onClick={test}>Console log</button>
            </div>
        </main>
    )
}