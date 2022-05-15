import React from "react";

const Card = ({ prompt }) => {
  return(
    <div className="card">
      <p>Prompt: {prompt}</p>
      <p>Response:</p>
    </div>
  )
}

export default Card;