import React, { useState } from 'react';
{/*images*/}
import {Screener} from "./Components/Screener";
import {Savage} from "./Components/Savage";
import GPT from "./GPTOverlay/Test";
import S2 from "./images/images"
import Crab from "./images/Crab2Svg";
import GitCatSvg from "./images/GitCatSvg"
import SkypeSvgTranslate from "./images/SkypeSvgTranslate"
import SkypeSvgTranslateProxy from "./images/SkypeSvgTranslateProxy"
import SkypeSvgRotate from "./images/SkypeSvgRotate"
import SkypeSvgScale from "./images/SkypeSvgScale"

import { Slider, Snackbar, Skeleton, RadioGroup, List, LinearProgress, CircularProgress, Button  } from "@mui/material"

import ReactLogo from './logo.svg';

export function Playground() {
  const i = 20; // used for the crabs
  const [valAmplitude, setValAmplitude] = useState(0)
  const [valDuration, setValDuration] = useState(2)
  const [show, setShow] = useState(false);

  const handleChangeCommitted = (event: React.SyntheticEvent | Event, value: number | number[]) => {
    // Your code to handle the change committed event
    const singleValue = Array.isArray(value) ? value[0] : value;
    setValDuration(singleValue); 
    // To force update, animation must be altered.
    //setValAmplitude(valAmplitude + 0.01);  
    //setValAmplitude(valAmplitude - 0.01);  
    setValAmplitude((c) => c + 0.01) // Als deze laatste is updatet het niet. (VOM updatet niet vanwege geen delta)
    setValAmplitude(valAmplitude - 0.01)
  };

  const handleChange = (event: React.SyntheticEvent | Event, value: number | number[]) => {
    // Your code to handle the change committed event
    const singleValue = Array.isArray(value) ? value[0] : value;
    setValAmplitude(singleValue); 
  };

  const handleClick = (vent: React.SyntheticEvent) => {
   //alert("You clicked!");
    setShow(!show);
    // event handler.
  }


  if(!show){
return(
  <>
        <Button variant="contained" onClick={handleClick}>
      Change View
      </Button>
      <div>
      <label>amplitude</label>
  <Slider color='info' 
      max={20}
      value={valAmplitude}
      name='theSlider' 
      valueLabelDisplay='auto' 
      onChange={handleChange}
      aria-labelledby='amplitude'
      />
      <label>{valAmplitude}</label>
      </div>
      <div>
      <label>duration</label>
<Slider color='error' 
      max={20}
      value={valDuration}
      name='theSlider' 
      valueLabelDisplay='auto' 
      onChangeCommitted={handleChangeCommitted}
      aria-labelledby='duration'
      />
      <label>{valDuration}</label>
      </div>
  
    <SkypeSvgTranslateProxy width={800} amplitude={valAmplitude} animationDuration={valDuration}/>
    </>
)
  }
  else{
    return (

      <>
      {/* <LinearProgress />
      <CircularProgress />
      <List />
      <RadioGroup /> */}
  {/*     <Skeleton /> */}
  {/*     <Snackbar /> */}
      
  <div>
  <Button variant="contained" onClick={handleClick}>
      Change View
      </Button>
      </div>
  
      <div style={{ display: 'flex' }}>
      <SkypeSvgTranslate width={800}/>
      <SkypeSvgRotate width={800}/>
      <SkypeSvgScale width={800}/>
  
  </div>
      <GitCatSvg />
      <div className="w-20 h-20">
        <GitCatSvg />
      </div>
      <GitCatSvg width={40}/>
      <GitCatSvg height={40}/>
        <div style={{ display: 'flex' }}>
      <S2 width={4 * i} height={4 * i} />
      <S2 width={5 * i} height={5 * i} />
      <S2 width={6 * i} height={6 * i} />
      <S2 width={8 * i} height={8 * i} />
      <S2 width={10 * i} height={10 * i} />
  </div>
  <div style={{ display: 'flex' }}>
  <>
    <Crab width={10 * i} height={10 * i} />
    <Crab width={8 * i} height={8 * i} />
    <Crab width={6 * i} height={6 * i} />
    <Crab width={5 * i} height={5 * i} />
    <Crab width={4 * i} height={4 * i} />
  </>
  
        </div>
      </>
          
    );
  
  {/* <div>This is a playground!</div>
    <Screener/>
    <Savage/>
    <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <A1 />
        </div>
        <KeypointsWithSVG />
      </div>
      <div>
        <I3 />
      </div> */}
  }
  }
  