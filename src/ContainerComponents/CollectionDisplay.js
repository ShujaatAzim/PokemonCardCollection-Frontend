import React, { useState, useEffect } from 'react'
import Card  from '../Components/Card'

const CollectionDisplay = () => {
  
  const [cards, setCards] = useState(null)

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v1/cards?setCode=base1;rarity=rare;supertype=pokemon')
    .then(resp => resp.json())
    .then(allCards => setCards(allCards))
  }, [])

  return (
    <div>
      { cards !== null ? cards.filter(card => card.number > "0" && card.number < "17").map(card => <Card cardImg={card.imageUrl} />) : null }
    </div>
  )
}

export default CollectionDisplay