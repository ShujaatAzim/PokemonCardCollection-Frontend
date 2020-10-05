import React, { useState, useEffect } from 'react';

function App() {

  const [card, setCard] = useState("")
  const [opacity, setOpacity] = useState("50%")

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v1/cards/base1-2')
    .then(resp => resp.json())
    .then(card => setCard(card))
  }, [])

  const handleOpacity = () => {
    if (opacity === "50%") {
      return setOpacity("100%")
    } 
    return setOpacity("50%")
  }

  return (
    <div>
      Collection:
      <div>
        {card !== "" ? <img onClick={() => handleOpacity()} style={{ opacity: opacity }} alt="Pokemon Card" src={`${card.card.imageUrl}`} /> : null }
      </div>
    </div>
  );
}

export default App;
