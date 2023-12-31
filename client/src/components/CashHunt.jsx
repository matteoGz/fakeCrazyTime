import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cashHuntModel } from "../models/cashHuntModel";
import '../assets/cashHunt.css';

export default function CashHunt(){
    const location = useLocation();

    let reload = location.state.reload

    useCallback(
      () => {
        window.location.reload()
      },
      [reload]
    )
    
    const navigate = useNavigate();

    const [generate, setGenerate] = useState(false);

    const [row1isVisible, setRow1IsVisible] = useState(false);
    const [row2isVisible, setRow2IsVisible] = useState(false);
    const [row3isVisible, setRow3IsVisible] = useState(false);
    const [row4isVisible, setRow4IsVisible] = useState(false);

    return(
    <div>
        <div className="board">
            <h1>Cash Hunt</h1>
            <button
                style={{marginLeft: 25}}
                onClick={() => setGenerate(true)}
            >
                Generate tiles board
            </button>
        { generate ?
            <>
            <div className="board-row">
            { cashHuntModel.row1.map((cell, index) =>
                <div key={index} className="cell">
                    {row1isVisible ? cell : "?"}
                </div>
            )}
            <button
                onClick={() => setRow1IsVisible(true)}
            >
                scopri
            </button>
            </div>
            <div className="board-row">
            { cashHuntModel.row2.map((cell, index) =>
                <div key={index} className="cell">
                    {row2isVisible ? cell : "?"}
                </div>    
            )}
            <button
                onClick={() => setRow2IsVisible(true)}
            >
                scopri
            </button>  
            </div>
            <div className="board-row">
            { cashHuntModel.row3.map((cell, index) =>
                <div key={index} className="cell">
                    {row3isVisible ? cell : "?"}
                </div>    
            )}
            <button
                onClick={() => setRow3IsVisible(true)}
            >
                scopri
            </button>
            </div>
            <div className="board-row">
            { cashHuntModel.row4.map((cell, index) =>
                <div key={index} className="cell">
                    {row4isVisible ? cell : "?"}
                </div>    
            )}    
            <button
                onClick={() => setRow4IsVisible(true)}
            >
                scopri
            </button>
            </div>
            </>
         :  <></> }
        </div>
        <button onClick={() => navigate('/')}>
            Torna alla ruota principale
        </button>
    </div>
    )
}