import React from 'react'
import Home from './PageComponents/Home'
import CardSet from './PageComponents/CardSet'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/cardset" component={CardSet} />
      </BrowserRouter>
    </div>
  );
}

export default App;
