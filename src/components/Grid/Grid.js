import React from "react";
import Card from "../Card/Card";
import './Grid.css';

const Grid = ({ prompts, id }) => {
  const promptCards = prompts.map((prompt) => {
    return(
      <Card
        key={prompt.id}
        id={prompt.id}
        prompt={prompt.promptInput}
      />
    )
  })

  return(
    <div className="grid">
      {promptCards}
    </div>
  )
}

export default Grid;