import React, { useState } from 'react'

const Card = props => {

  let { card } = props

  const [opacity, setOpacity] = useState("100%")

  const handleOpacity = () => {
    if (opacity === "100%") {
      return setOpacity("50%")
    } 
    return setOpacity("100%")
  }

  return (
    <div style={{ display: "inline-block", margin: "0.5rem" }}>
      <img onClick={() => handleOpacity()} style={{ opacity: opacity }} alt={card.name} src={`${card.image_url}`} />
    </div>
  )
}

export default Card