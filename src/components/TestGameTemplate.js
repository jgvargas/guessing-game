import React, { useState, useEffect } from 'react'

export default function TestGameTemplate() {
    const topic = 'planets'
    let welcomeText = `So, you think you know about Star War's ${topic}?`
    let possibleAnswers = [
        "Chewy",
        "Answer 2",
        "Luke",
        'Answer 4'
    ]
    let topicApiUrl = "https://swapi.dev/api/people/"

    const [userChoice, setUserChoice] = useState()
    let [topicData, setTopicData] = useState()

    useEffect( () => {
        fetch(topicApiUrl)
        .then(response => response.json() )
        .then( data => {
            console.log(data)
            
        })
    }, [] )

    return(
        <main className="container game-space">
            <h2 className='game-info text-center'>
                {welcomeText}
            </h2>
            <p className="game-question text-center">
                What is a Star War?
            </p>

            <div className="answer-section text-center split">
                <label htmlFor="answer1">
                    <input type="radio" name="choices" id="answer1" />    
                    <span className='style1'>{possibleAnswers[0]}</span>
                </label>
                <label htmlFor="answer2">
                    <input type="radio" name="choices" id="answer2" />
                    <span className='style2'>{possibleAnswers[1]}</span>
                </label>
                <label htmlFor="answer3">
                    <input className='option-3' type="radio" name="choices" id="answer3" />
                    <span className='style3'>{possibleAnswers[2]}</span>
                </label>
                <label htmlFor="answer4">
                    <input type="radio" name="choices" id="answer4" />
                    <span className='style4'>{possibleAnswers[3]}</span>
                </label>
            </div>
            <button className='submit-btn'>Submit</button>    
        </main>
    )
}