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
      { cards ? cards.cards.filter(card => parseInt(card.number) > 0 && parseInt(card.number) < 17)
        .sort((a,c) => (parseInt(a.number) - parseInt(c.number)))
        .map(card => <Card key={card.id} cardImg={card.imageUrl} />) 
        : null }
    </div>
  )
}

export default CollectionDisplay