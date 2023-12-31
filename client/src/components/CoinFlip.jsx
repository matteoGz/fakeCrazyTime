import { useState } from "react";
import coinSpin from '../assets/coinSpin.png';
import coinCroce from '../assets/coinCroce.webp';
import '../assets/coinSpin.css';
import { useNavigate } from "react-router";

export default function CoinFlip(){
    const navigate = useNavigate();

    const randomBonus = Math.floor(Math.random() * 16) + 10;

    const [result, setResult] = useState(null);
    const [spinning, setSpinning] = useState(false);
  
    const tossCoin = () => {
      setSpinning(true);
  
      setTimeout(() => {
        const random = Math.random();
        const outcome = random < 0.5 ? 'Testa' : 'Croce';
        setResult(outcome);
        setSpinning(false);
      }, 10000);
    };
  
    return (
      <div>
        <h1>Testa o Croce</h1>
        <button onClick={tossCoin} disabled={spinning}>
          Lancia la moneta
        </button>
        {spinning ? (
         <>
          <h2>Il bonus sarà di {randomBonus}x</h2>
          <img
            src={coinSpin}
            alt="Moneta in rotazione"
            className="spinning-coin"
          />
         </>
        ) : result ? (
          <>
            <p>Risultato: {result}</p>
            <img
                src={result === "Testa" ? coinSpin : coinCroce}
                alt="Risultato moneta"
                width={288}
                height={result === "Testa" ? 200 : 144}
            />
          </>
        ) : null}
        <button
            onClick={() => navigate('/')}
        >
            Torna alla ruota principale
        </button>
        <h3>Chi indovina prende il bonus indicato altrimenti metà (arrotondando per difetto)</h3>
      </div>
    );
}