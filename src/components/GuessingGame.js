/*
    BUGS:
    - Sometimes multiple choice answers are blank
    - Some images are broken from the hosts end. No solution, yet?

    TODO: 
        Properly allow user to select topics
        Fix randQuestion random assignment
*/

import React from 'react'
import Radio from './Radio'

export default function TestGameTemplate( props) {
    const topic = props.gameTopic
    const topicData = props.gameData
    let welcomeText = `So, you think you know about the ${topic} of Star Wars ?`
    let person
    let question
    let questionImg
    let possibleAnswers

    function selectTrivia() {
        let randTopic = Math.floor( Math.random() * topicData.length)
        person = topicData[randTopic].name
        questionImg = topicData[randTopic].image

        let possibleQuestions = [
            `What is ${person}'s homeworld?`,
            `Who is this character?`
        ]
        
        //let randQuestion = Math.floor( Math.random() * possibleQuestions.length)
        let randQuestion = 0

        question = possibleQuestions[randQuestion]

        // Answers section
        if(randQuestion === 0) {
            possibleAnswers = [
                topicData[0].homeworld,
                topicData[Math.floor( Math.random() * topicData.length)].homeworld,
                topicData[Math.floor( Math.random() * topicData.length)].homeworld,
                topicData[Math.floor( Math.random() * topicData.length)].homeworld
            ]
        } else if (randQuestion === 1) {
            // Get random img for the question
            // Get random names for possible answers
        } else {
            possibleAnswers = [
                "Something",
                "Has gone",
                "Horribly",
                'Wrong'
            ]
        }
        // "Shuffle" array
        possibleAnswers.sort( ()=> 0.5 - Math.random() )
    }

    selectTrivia()
    

    let radioElements = possibleAnswers.map( answer => (
      <Radio 
        key={answer}
        onChange={props.handleRadioChange}
      />
    ))

    return(
        <main className="container game-space">
            <h1 className='text-center'>
                {welcomeText}
            </h1>

            <div className="game-info">
              <img className='game-img' src={questionImg} alt={person} />
              <h2 className="game-question text-center">
                  {question}
              </h2>
            </div>
            
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