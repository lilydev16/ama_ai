import React from "react";
import Card from "../Card/Card";

const List = ({ texts}) => {
  const promptCards = texts.map((text, index) => {
    return(
      <Card
        key={index}
        text={text}
      />
    )
  })

  return(
    <div className='list space-y-3 mt-16 px-16'>
      {promptCards}
    </div>
  )
}

export default List;