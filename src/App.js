import "./App.css";
import { useEffect, useState } from "react";

import CurrentCard from "./components/CurrentCard.js";
import { getRandomCard, saveCard } from "./util/API.js";
import Caption from "./components/Caption.js";

function App() {
  const [currentCard, setCurrentCard] = useState(null);
  const [cardCollection, setCardCollection] = useState(null);

  useEffect(() => {
    getRandomCard(setCurrentCard);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Cat Cards</h1>
      <CurrentCard card={currentCard} />
      <Caption next={() => getRandomCard(setCurrentCard)} save={saveCard} card={currentCard}/>
    </div>
  );
}

export default App;
