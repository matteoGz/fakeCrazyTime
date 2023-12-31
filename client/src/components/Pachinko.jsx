import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import Asso from '../assets/Asso.jpg';
import Re from '../assets/Re.jpg';
import Donna from '../assets/Donna.jpg';
import Jack from '../assets/Jack.jpg';
import Dieci from '../assets/Dieci.jpg';
import Nove from '../assets/Nove.jpg';
import Otto from '../assets/Otto.jpg';
import Sette from '../assets/Sette.jpg';
import Sei from '../assets/Sei.jpg';
import Cinque from '../assets/Cinque.jpg';
import Quattro from '../assets/Quattro.jpg';
import Tre from '../assets/Tre.jpg';
import Due from '../assets/Due.jpg';
import PuntoInterrogativo from '../assets/PuntoInterrogativo.jpg';

export default function Pachinko(){
    const navigate = useNavigate();

    const [gameStarted, setGameStarted] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [resultMessage, setResultMessage] = useState('');
    const [bonus, setBonus] = useState(Math.floor(Math.random() * 11) + 10);
    const [imgCurrent, setImgCurrent] = useState(PuntoInterrogativo);
  
    useEffect(() => {
      if(currentCard !== null){
        switch(currentCard){
          case 2:
            setImgCurrent(Due)
            break;
          case 3:
            setImgCurrent(Tre)
            break;
          case 4:
            setImgCurrent(Quattro)
            break;
          case 5:
            setImgCurrent(Cinque)
            break;
          case 6:
            setImgCurrent(Sei)
            break;
          case 7:
            setImgCurrent(Sette)
            break;
          case 8:
            setImgCurrent(Otto)
            break;
          case 9:
            setImgCurrent(Nove)
            break;
          case 10:
            setImgCurrent(Dieci)
            break;
          case 'J':
            setImgCurrent(Jack)
            break;
          case 'Q':
            setImgCurrent(Donna)
            break;
          case 'K':
            setImgCurrent(Re)
            break;  
          case 'A':
            setImgCurrent(Asso)
            break;
        }
      }
    }, [currentCard])
    

    const startGame = () => {
      const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
      const randomIndex = Math.floor(Math.random() * cards.length);
      setGameStarted(true)
      setResultMessage('');
      setTimeout(() => {
        setCurrentCard(cards[randomIndex]);
      }, 2000);
    };
  
    const guess = (outcome) => {
      const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
      const randomIndex = Math.floor(Math.random() * cards.length);
      const nextCard = cards[randomIndex];
  
      if ((outcome === 'higher' && cards.indexOf(nextCard) > cards.indexOf(currentCard)) ||
          (outcome === 'lower' && cards.indexOf(nextCard) < cards.indexOf(currentCard))) {
        setResultMessage(`Corretto!`);
        setBonus(bonus+5)
      } else {
        setResultMessage(`Sbagliato!`);
      }
  
      setCurrentCard(nextCard);
    };
  
    return (
      <div className="pachinko">
        <h1>Pachinko</h1>
        <h2>Carta più alta o più bassa</h2>
        <h3>Il bonus si incrementa di 5 ogni volta che si indovina</h3>
        <button onClick={startGame}>Inizia</button>
        <button onClick={() => navigate('/')}>Torna alla ruota principale</button>
        { gameStarted ? 
          <>
            <p>Il bonus attuale è di <strong>{bonus}x</strong></p>
            <div className="card-display">
              <span>
                <img src={imgCurrent} alt="card-result" width={480} height={360}/>
              </span>
            </div>
            <p>{resultMessage}</p>
            
            <div className="buttons">
              <button onClick={() => guess('higher')}>Più Alta</button>
              <button onClick={() => guess('lower')}>Più Bassa</button>
            </div>
          </>
          : <></> }
      </div>
    );
}