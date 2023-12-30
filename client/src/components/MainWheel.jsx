import React, { useState } from 'react';
import SpinMarker from '../assets/spin-marker.svg';
import { mainWheelModel } from '../models/mainWheelModel';
import { Button, RefreshIcon } from 'evergreen-ui';
import logoWheel from '../assets/LogoMainWheel.png';

export default function MainWheel(props) {
  console.log("props to MainWheel--- ", props)
  
  const [colorButtons, setColorButtons] = useState([true, true, true, true]);

  const segments = mainWheelModel;
  console.log("***SPICCHI*** ", segments);

  const spin = () => {
    const svgElement = document.querySelector('.spin-svg');
    const spinAngle = Math.floor(Math.random()*360) + 3600;

    svgElement.style.transition = 'transform 10s linear';
    svgElement.style.transform = `rotate(360deg)`;

    setTimeout(() => {
      svgElement.style.transition = 'none';
      svgElement.style.transform = `rotate(${spinAngle}deg)`;
      console.log("Spinning stopped at ", spinAngle, " angle");
    }, 10000);
  }

  return (
    <>
    <div className='spin-marker-container' style={{display: "flex", justifyContent: "center", alignItems: "center", marginRight: 50}}>
        <img src={SpinMarker} alt='Spin Marker' style={{width: 64, height: 64}}/>
    </div>
    <div className='main-wheel-container' style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 5}}>
      <svg className='spin-svg' width="100vw" height="88vh" viewBox="0 0 100 100">
        {segments.map((seg, index) => {
          const angle = (360 / 54) * index; //angle° for each segment

          const startAngle = (Math.PI / 180) * angle;
          const endAngle = (Math.PI / 180) * (angle + 360 / 54);

          const x1 = 50 + 50 * Math.cos(startAngle);
          const y1 = 50 + 50 * Math.sin(startAngle);
          const x2 = 50 + 50 * Math.cos(endAngle);
          const y2 = 50 + 50 * Math.sin(endAngle);

          // Calculate midpoint for placing text
          const midAngle = (startAngle + endAngle) / 2;
          const textX = 50 + 40 * Math.cos(midAngle);
          const textY = 50 + 40 * Math.sin(midAngle);

          // Calculate rotation angle for text
          const rotation = midAngle * (180 / Math.PI);

          return (
            <>
              <path
                key={index}
                d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                fill={seg.color}
              />
              <text x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="3" transform={`rotate(${rotation}, ${textX}, ${textY})`}>
                {seg.name.substring(1, seg.name.length)}
              </text>
              <image
                x="25"
                y="15"
                width="50"
                height="50"
                href={logoWheel}
              />
            </>
          );
        })}
      </svg>
      <Button
        appearance="primary"
        iconBefore={RefreshIcon}
        onClick={spin}
      >
        SPIN
      </Button>
    </div>
    <Button
      backgroundColor={segments[11].color}
      color={colorButtons[0] ? 'white' : 'black'}
      onMouseEnter={() => {
        let colors = [...colorButtons]
        colors[0] = !colorButtons[0]
        setColorButtons(colors)
      }}
      onMouseLeave={() => {
        let colors = [...colorButtons]
        colors[0] = !colorButtons[0]
        setColorButtons(colors)
      }}
    >
      COIN FLIP
    </Button>
    <Button
      backgroundColor={segments[17].color}
      color={colorButtons[1] ? 'white' : 'black'}
      onMouseEnter={() => {
        let colors = [...colorButtons]
        colors[1] = !colorButtons[1]
        setColorButtons(colors)
      }}
      onMouseLeave={() => {
        let colors = [...colorButtons]
        colors[1] = !colorButtons[1]
        setColorButtons(colors)
      }}
    >
      CASH HUNT
    </Button>
    <Button
      backgroundColor={segments[5].color}
      color={colorButtons[2] ? 'white' : 'black'}
      onMouseEnter={() => {
        let colors = [...colorButtons]
        colors[2] = !colorButtons[2]
        setColorButtons(colors)
      }}
      onMouseLeave={() => {
        let colors = [...colorButtons]
        colors[2] = !colorButtons[2]
        setColorButtons(colors)
      }}
    >
      PACHINKO
    </Button>
    <Button
      backgroundColor={segments[53].color}
      color={colorButtons[3] ? 'white' : 'black'}
      onMouseEnter={() => {
        let colors = [...colorButtons]
        colors[3] = !colorButtons[3]
        setColorButtons(colors)
      }}
      onMouseLeave={() => {
        let colors = [...colorButtons]
        colors[3] = !colorButtons[3]
        setColorButtons(colors)
      }}
    >
      CRAZY TIME
    </Button>
    </>
  );
}