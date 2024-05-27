import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import {motion} from 'framer-motion'
import BetterArmPathonly from '../Playground/images/BetterArmPathonly'

// Date of Creation 24-04-2024
// Copy of SvgAnchoroverlay2.tsx at creation

export default function MyComponent() {
 // Making my 'Arm'-SVG component a custom usable motion element
 // Mind: Nu gebruik je niet motion.Arm maar MotionArm rechtstreeks.
 // motion.Arm werkt niet. Je kunt alleen DOM- en HTML elementen voorzien van motion (FM)
    const MotionArmPathOnly = motion(BetterArmPathonly);

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

    //setAnchorPosition({x: 0, y: 0})

    //'end.x - start.x'
    let wpos = posx > posx2 ? posx - posx2 : posx2 - posx
    let hpos = posy > posy2 ? posy - posy2 : posy2 - posy
    setDimensions({w: wpos, h: hpos})

  
  };
// In this example there is just a path. Which means not all svg attributes are available.
// There should be attempts to get the path to follow our wishes.
  return (
<>
    <Button variant="contained" onClick={UpdatePos}></Button>
    <label>SVG Overlay SVG op SVG</label>
    <svg width="200" height="200">
      <motion.rect opacity={0.4}
      animate={{x: anchorPosition.x, y: anchorPosition.y}}
      width={dimensions.w} height={dimensions.h} fill={"red"}/>
      <MotionArmPathOnly 
      start={anchorPosition}
        end={endPosition}
        size={dimensions}

      animate={{x: anchorPosition.x, y: anchorPosition.y, rotate: dimensions.w}}
      width={dimensions.w} height={dimensions.h}
      animX={3}
      animY={3}
      scale={0.2}
      animRotate={dimensions.w}/>
      {/* Begin + End Point Indicators */}
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
      <motion.rect opacity={0.4}
      animate={{x: anchorPosition.x, y: anchorPosition.y}}
      width={dimensions.w} height={dimensions.h} fill={"red"}/>
      <MotionArmPathOnly
      animate={{x: -3, rotate: 45, scale:0.2}} 
      rotate={45}
      scale={0.2}
      start={{x:0, y:0}}
      end={{x:0, y:0}}
      size={{w:0, h:0}}
      />
      {/* Begin + End Point Indicators */}
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
</>
  );
}