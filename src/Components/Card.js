import React, { useState } from 'react'

const Card = props => {

  let { card } = props

  const [opacity, setOpacity] = useState("50%")

  const handleOpacity = () => {
    if (opacity === "50%") {
      return setOpacity("100%")
    } 
    return setOpacity("50%")
  }

  return (
    <div>
      {card !== "" ? <img onClick={() => handleOpacity()} style={{ opacity: opacity }} alt="Pokemon Card" src={`${card.card.imageUrl}`} /> : null }
    </div>
  )
}

export default Card