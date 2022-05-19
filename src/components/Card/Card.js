import React from "react";
import './Card.css';

const Card = ({ text }) => {
  return(
    <div className="card bg-white shadow overflow-hidden rounded-md px-6 py-4">
      <p>Prompt: {text.split('\n\n')[0]}</p>
      <p>Response: {text.split('\n\n')[1]}</p>
    </div>
  )
}

export default Card;