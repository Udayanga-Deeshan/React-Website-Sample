import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    const food = "My favourite food is " 

    const spart ="and I love"

  return (
    <div>
      <div className="topicBox">
        <span>{food} {spart} {props.food}</span>
      </div>
    </div>
  )
}
