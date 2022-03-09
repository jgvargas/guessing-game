import React, { useEffect, useState } from 'react'

export default function GuessingGame({apiUrl, topicData, player}) {

  console.log("The game is mounting")

  let resultsArray = topicData.results
  let single = resultsArray[0]
  console.log(topicData)
  console.log(single)
  console.log( Object.values(single) )
  console.log(Object.keys(single))

  // topicData.results is an array of objects
  // 

  

  return (
    <div>
      
      <h1 className='text-center'>
        So, you THINK you know <span className="game-topic">{player.topic}</span> from Star Wars?
      </h1>
    </div>
  )
}
