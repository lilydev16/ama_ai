import React from "react";
import './Card.css';

const Card = ({ prompt }) => {
  return(
    <div className="card">
      <p>Prompt: {prompt}</p>
      <p>Response:</p>
    </div>
  )
}

export default Card;