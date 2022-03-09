/*
    BUGS:
    - Props data "topicData" is being shown as undefined in child component. 
      Works once file is edited but stops when page is refreshed
      
    TODO: 
        Properly allow user to select topics
*/

import React, { useState, useEffect } from 'react'

export default function TestGameTemplate( props) {
    const topic = props.gameTopic
    const topicData = props.gameData
    let welcomeText = `So, you think you know about Star War's ${topic}?`
    let person
    let question
    let possibleAnswers

    function selectTrivia() {
        let randTopic = Math.floor( Math.random() * topicData.length)
        person = topicData[0].name

        // Question section order, homeworld -> film ->  height -> hair color
        let possibleQuestions = [
            `What planet is ${person} from?`,
            `What film did ${person} appear in?`,
            `How tall is ${person} in centimeters?`,
            `What kind of hair does ${person} have?`

        ]
        
        //let randQuestion = Math.floor( Math.random() * possibleQuestions.length)
        let randQuestion = 3

        question = possibleQuestions[randQuestion]

        // Answers section
        if(randQuestion === 3) {
            possibleAnswers = [
                topicData[0].height,
                Math.floor( Math.random() * (
                     (topicData[0].height + 50) - (topicData[0].height - 50) + 1 ) + (topicData[0].height - 50) 
                     ),

                Math.floor( Math.random() * (
                     (topicData[0].height + 50) - (topicData[0].height - 50) + 1 ) + (topicData[0].height - 50) 
                     ),

                Math.floor( Math.random() * (
                     (topicData[0].height + 50) - (topicData[0].height - 50) + 1 ) + (topicData[0].height - 50) 
                     )
            ]
        }
        else {
            possibleAnswers = [
                "Chewy",
                "Answer 2",
                "Luke",
                'Answer 4'
            ]
        }
        
    }

    selectTrivia()
    

    return(
        <main className="container game-space">
            <h2 className='game-info text-center'>
                {welcomeText}
            </h2>
            <p className="game-question text-center">
                {question}
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