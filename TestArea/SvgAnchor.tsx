import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import {motion} from 'framer-motion'

// Date of Creation 23-04-2024

export default function MyComponent() {
  const [anchorPosition, setAnchorPosition] = useState({ x: 20, y: 20 });
  const [endPosition, setEndPosition] = useState({ x: 20, y: 20 });
  const [dimensions, setDimensions] = useState({w: 20, h: 20})

  const handleClick = () => {
    // Update anchor point position on click
    setAnchorPosition({ x: 80, y: 90 });
    console.log(anchorPosition)
  };

  const UpdatePos = () => {
    let posx = Math.floor(Math.random() * 80)+1;
    let posy = Math.floor(Math.random() * 80)+1;
    setAnchorPosition({x: posx, y: posy})

    let posx2 = Math.floor(Math.random() * 80)+81;
    let posy2 = Math.floor(Math.random() * 80)+81;
    setEndPosition({x: posx2, y: posy2})
    
    //'end.x - start.x'
    let wpos = posx > posx2 ? posx - posx2 : posx2 - posx
    let hpos = posy > posy2 ? posy - posy2 : posy2 - posy
    setDimensions({w: wpos, h: hpos})
  };
  const UpdatePosB = () => {
    // Deze werkt met een 'elk punt kan overal staan'
    let posx = Math.floor(Math.random() * 160)+1;
    let posy = Math.floor(Math.random() * 160)+1;
    setAnchorPosition({x: posx, y: posy})

    let posx2 = Math.floor(Math.random() * 160)+81;
    let posy2 = Math.floor(Math.random() * 160)+81;
    setEndPosition({x: posx2, y: posy2})
    
    //'end.x - start.x'
    let wpos = posx > posx2 ? posx - posx2 : posx2 - posx
    let hpos = posy > posy2 ? posy - posy2 : posy2 - posy
    setDimensions({w: wpos, h: hpos})
  };
  return (
<>
    <Button variant="contained" onClick={UpdatePos}></Button>
    <svg width="200" height="200">
      <motion.rect 
      animate={{x: anchorPosition.x, y: anchorPosition.y}}
      width={dimensions.w} height={dimensions.h} fill="red" />
      {/* Anchor point */}
      <a onClick={handleClick}>
        <circle
          cx={anchorPosition.x}
          cy={anchorPosition.y}
          r="4"
          fill="blue"
        />
      </a>
      <a onClick={handleClick}>
        <circle
          cx={endPosition.x}
          cy={endPosition.y}
          r="4"
          fill="cyan"
        />
      </a>
    </svg>
    <svg width="200" height="200">
      <motion.rect 
      x={anchorPosition.x}
      y={anchorPosition.y}
      width={dimensions.w} height={dimensions.h} fill="red" />
      {/* Anchor point */}
      <a onClick={handleClick}>
        <circle
          cx={anchorPosition.x}
          cy={anchorPosition.y}
          r="4"
          fill="blue"
          
        />
    <a onClick={handleClick}>
        <circle
          cx={endPosition.x}
          cy={endPosition.y}
          r="4"
          fill="cyan"
        />
      </a>
      </a>
    </svg>
    </>
  );
}

/* return (
    <>
        <Button variant="contained" onClick={UpdatePos}></Button>
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="red" />
          <a onClick={handleClick}>
            <circle
              id="anchorPoint"
              cx={anchorPosition.x}
              cy={anchorPosition.y}
              r="4"
              fill="blue"
              
            />
          </a>
        </svg>
        <svg width="200" height="200">
          <motion.rect 
          animate={{x: anchorPosition.x, y: anchorPosition.y}}
          width="80" height="80" fill="red" />
          <a onClick={handleClick}>
            <circle
              id="anchorPoint"
              cx={anchorPosition.x}
              cy={anchorPosition.y}
              r="4"
              fill="blue"
              
            />
          </a>
        </svg>
        </>
      ); */