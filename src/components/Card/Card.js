import React from "react";
import './Card.css';

const Card = ({ text }) => {
  return(
    <div className="card">
      <p>Prompt: {text.split('\n\n')[0]}</p>
      <p>Response: {text.split('\n\n')[1]}</p>
    </div>
  )
}

export default Card;