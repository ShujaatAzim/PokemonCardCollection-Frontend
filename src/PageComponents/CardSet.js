import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'

const CardSet = () => {

  const [allCards, setAllCards] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(cards => setAllCards(cards))
  }, [])

  return (
    <div>
      { allCards ? allCards.map(card => <Card key={card.code} card={card} />) : null }
    </div>
  )
}

export default CardSet