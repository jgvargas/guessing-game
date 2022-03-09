import React, {useState, useEffect} from "react";
import TestGameTemplate from "./TestGameTemplate";

export default function TestControls () {
    const baseApiUrl = "https://swapi.dev/api/"
    let [starWarsData, setStarWarsData] = useState("")
    let [gameStarted, setGameStarted] = useState(false)

    useEffect( ()=> {
        fetch(`${baseApiUrl}people/`)
        .then(res => res.json() )
        .then(data => {
            setStarWarsData(data)
        })

        console.log("@ UseEffect")
    }, [])
    
    function startGame() {
        setGameStarted( prevState => !gameStarted)
    }

    return (
        <div className="container">
            <button onClick={ ()=> startGame()}>Start</button>
            {
                gameStarted && 
                <TestGameTemplate 
                    gameTopic={"people"}
                    gameData={starWarsData.results}
                />
            }
        </div>
    )
}