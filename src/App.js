import React, { useState, useEffect } from 'react';

function App() {

  const [card, setCard] = useState("")

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v1/cards/xy7-54')
    .then(resp => resp.json())
    .then(card => setCard(card))
  }, [])

  return (
    <div>
      Game!
      <div>
        {card !== "" ? <img style={{ opacity: "50%" }} alt="Pokemon Card" src={`${card.card.imageUrl}`} /> : null }
      </div>
    </div>
  );
}

export default App;
