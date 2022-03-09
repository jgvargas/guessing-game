import React from 'react'

export default function Radio(props) {
  return (
    <div>
      <label htmlFor={props.topic}>
        <input 
          type="radio" 
          id={props.topic}
          name="topicSelection" 
          value={props.topic}
          onChange={props.onChange}
        />
        {props.topic}
      </label>
    </div>
  )
}
