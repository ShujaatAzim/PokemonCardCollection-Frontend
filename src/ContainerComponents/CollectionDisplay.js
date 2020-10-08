import React, { useState, useEffect } from 'react'
import Card  from '../Components/Card'

const CollectionDisplay = () => {
  
  const [allCards, setAllCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cards')
    .then(resp => resp.json())
    .then(data => setAllCards(data))
  }, [])
  
  return (
    <div>
      { allCards ? allCards.map(card => <Card key={card.code} card={card} />) : null }
    </div>
  )
}

export default CollectionDisplay