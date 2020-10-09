import React from 'react'
import Card  from '../Components/Card'

const CollectionDisplay = props => {
  
  const { user } = props

  return (
    <div>
      { user ? user.collection.cards.map(card => <Card key={card.code} card={card} />) : null }
    </div>
  )
}

export default CollectionDisplay