import { useState } from "react";
import { useNavigate } from 'react-router';
import doorImg from '../assets/door.png';
import '../assets/crazyTime.css';

export default function CrazyTime(){
    const currentWidth = window.innerWidth;
    const navigate = useNavigate();

    const [door1, setDoor1] = useState(false);
    const [door2, setDoor2] = useState(false);
    const [door3, setDoor3] = useState(false);

    const crazyBonus = Math.random() < 0.33;

    const [randomDoor1, setRandomDoor1] = useState(0);
    const [randomDoor2, setRandomDoor2] = useState(0);
    const [randomDoor3, setRandomDoor3] = useState(0); 

    const widthImg = currentWidth > 768 ? 480 : 160
    const heigthImg = currentWidth > 768 ? 360 : 120

    const marginImg = currentWidth > 768 ? 100 : 33

    return(
        <div>
            <h1>Crazy Time</h1>
            <h2>Choose one of the three doors</h2>
            { crazyBonus ? <><h3>CRAZY BONUS ATTIVO</h3><h4>Moltiplica la vincita per 2x !</h4></> : <></> }
            <div className="doors-container">
                <div className="door">
                { !door1 ?
                    <img
                        src={doorImg}
                        width={widthImg}
                        height={heigthImg}
                        onClick= {() => {
                            setDoor1(true)
                            setRandomDoor1(Math.floor(Math.random() * 76) + 25)
                        }}
                    />
                 : <h1 style={{marginLeft: marginImg}}>{randomDoor1}</h1>
                }
                </div>
                <div className="door">
                { !door2 ?
                    <img
                        src={doorImg}
                        width={widthImg}
                        height={heigthImg}
                        onClick= {() => {
                            setDoor2(true)
                            setRandomDoor2(Math.floor(Math.random() * 76) + 25)
                        }}
                    />
                 : <h1 style={{marginLeft: marginImg}}>{randomDoor2}</h1>
                }
                </div>
                <div className="door">
                { !door3 ?
                    <img
                        src={doorImg}
                        width={widthImg}
                        height={heigthImg}
                        onClick= {() => {
                            setDoor3(true)
                            setRandomDoor3(Math.floor(Math.random() * 76) + 25)
                        }}
                    />
                 : <h1 style={{marginLeft: marginImg}}>{randomDoor3}</h1>
                }
                </div>
            </div>
            <button
                onClick={() => navigate('/')}
            >
                Torna alla ruota principale
            </button>
        </div>
    )
}