import React from "react";
import Card from "../Card/Card";
import './List.css';

const List = ({ prompts, id }) => {
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
    <div className="list">
      {promptCards}
    </div>
  )
}

export default List;