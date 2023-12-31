import { useState } from "react";


export default function Pachinko(){
    const [currentCard, setCurrentCard] = useState(null);
    const [resultMessage, setResultMessage] = useState('');
  
    const startGame = () => {
      const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
      const randomIndex = Math.floor(Math.random() * cards.length);
      setCurrentCard(cards[randomIndex]);
      setResultMessage('');
    };
  
    const guess = (outcome) => {
      const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
      const randomIndex = Math.floor(Math.random() * cards.length);
      const nextCard = cards[randomIndex];
  
      if ((outcome === 'higher' && cards.indexOf(nextCard) > cards.indexOf(currentCard)) ||
          (outcome === 'lower' && cards.indexOf(nextCard) < cards.indexOf(currentCard))) {
        setResultMessage(`Corretto! La prossima carta è ${nextCard}`);
      } else {
        setResultMessage(`Sbagliato! La prossima carta era ${nextCard}`);
      }
  
      setCurrentCard(nextCard);
    };
  
    return (
      <div className="pachinko">
        <h1>Pachinko</h1>
        <h2>Carta più alta o più bassa</h2>
        <div className="card-display">
          <span>{currentCard || '?'}</span>
        </div>
        <p>{resultMessage}</p>
        <button onClick={startGame}>Inizia</button>
        <div className="buttons">
          <button onClick={() => guess('higher')}>Più Alta</button>
          <button onClick={() => guess('lower')}>Più Bassa</button>
        </div>
      </div>
    );
}