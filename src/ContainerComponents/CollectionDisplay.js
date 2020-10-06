import React, { useState, useEffect } from 'react'
import Card  from '../Components/Card'

const CollectionDisplay = () => {
  
  const [card, setCard] = useState("")

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v1/cards/base1-2')
    .then(resp => resp.json())
    .then(card => setCard(card))
  }, [])

  return (
    <div>
      <Card card={card} />
    </div>
  )
}

export default CollectionDisplay