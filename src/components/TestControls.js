import React, {useState, useEffect} from "react";
import GuessingGame from "./GuessingGame"

export default function TestControls () {
    const baseApiUrl = "https://akabab.github.io/starwars-api/api/all.json"
    let [starWarsData, setStarWarsData] = useState("")
    let [gameStarted, setGameStarted] = useState(false)
    let [playerData, setPlayerData] = useState({
        score: 0,
        answerSelection: "",

    })

    useEffect( ()=> {
        fetch(`${baseApiUrl}`)
        .then(res => res.json() )
        .then(data => {
            setStarWarsData(data)
        })

        console.log("@ UseEffect")
    }, [])
    
    function handleRadioChange(event) {
        console.log(event.target)
    }

    function startGame() {
        setGameStarted( prevState => !gameStarted)
    }

    return (
        <div className="container">
            <button onClick={ ()=> startGame()}>{gameStarted ? "Quit": "Start"}</button>
            {
                gameStarted &&
                <GuessingGame 
                    gameTopic={"people"}
                    gameData={starWarsData}
                    onChange={handleRadioChange}
                />
            }
        </div>
    )
}