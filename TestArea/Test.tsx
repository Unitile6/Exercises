import React, { ReactNode, useRef, useState } from "react";

import {KeypointsWithSVG as A1} from "../Playground/Components/iDBPSData";
import {KeypointsWithSVG} from "../Playground/Components/iDBPSDataWithVis";
import {KeypointsWithSVG as I3} from "../Playground/Components/i3";
import S1 from "../Playground/images/Crab2Svg"
import classNames from "classnames";
import Time from "./CurrentTime"
import { Button } from "@mui/material";
import Dataeer from "./Dataeer"
import SvginSvg from "./SvgInSvg"
import SkypeSVG from "../Playground/images/SkypeSvgAllSimple"
import SvgAnchor from "./SvgAnchor"
import SvgAnchorOverlay from "./SVGAnchorOverlay"
import SvgAnchorOverlay2 from "./SVGAnchorOverlay2"
import SvgAnchorOverlay3 from "./SVGAnchorOverlay3"
import DynamicGraphics, { Ninja } from "./DynamicGraphics"
import NinjaGrid from "./DynamicGraphicsB"
import CleanPath from "./DynamicGraphicsC"

export function TestArea(){
  const [posi,setPosi] = useState(1)
  function changePosiInParent(){
      let x = Math.floor(Math.random() * 100)
      setPosi(x)
      console.log('sucees')
    }
    const [show, setShow] = useState(true)
    function handleClick(){
      setShow(!show)
    }

   const [isColo, setColo] = useState(true)
   const [isRot, setRot] = useState(0)
   function ChangeColor(){
    setColo(!isColo)
   }
   function DoRotate(){
    setRot(isRot + 90)
   }

      if(!show){
        return(
          <>
          <Button variant="contained" onClick={handleClick}>Change screen</Button>
          <Button variant="contained" onClick={ChangeColor}>Change color</Button>
          <Button variant="contained" onClick={DoRotate} color="secondary">ROTATE</Button>
          <DynamicGraphics isVisible={isColo} />

          <NinjaGrid isRot={isRot} numberOfNinjas={184}/>
            </>
        )
      }
      else{ 
    return(
      <>
      <Button variant="contained" onClick={handleClick}>Change screen</Button>
      <Button variant="contained" color="secondary" onClick={changePosiInParent}>Changepos</Button>
      
      <CleanPath given={posi}/>
      </>
      )
}

}
export function TestArea2(){
  const [alt, setAlt] = useState(false)
  function Alternate(){
    setAlt(!alt)
  }
  if(alt)
    {
      return(
        <>
        <Button onClick={Alternate} variant="contained">Alternate</Button>
        <label>Welcome to TestArea 2.A!</label>
        <SvgAnchorOverlay3 />
        <p>__________________________________________________</p>
        <p>--------------------------------------------------</p>
        <h1>Archief</h1>
        <p>--------------------------------------------------</p>
        <SvgAnchorOverlay2 />
        <p>--------------------------------------------------</p>
        <SvgAnchorOverlay />
        <p>--------------------------------------------------</p>
        <SvgAnchor />
         </>
        )
    }
  else{
  return(
    
  <>
  <Button onClick={Alternate} variant="contained">Alternate</Button>
  <label>Welcome to TestArea 2.B!</label>
    <SvginSvg />
    <SkypeSVG width={200}/>
   <Dataeer />
   </>
  )
}
}

export function KeypointTesting(){
    return (<>
    <p>Keypointtests: Simulatie van keypoints en lijnen om hopelijk hierop verder te bouwen en/of testen. Visuele representatie.</p>
    <A1 />
    <KeypointsWithSVG />
    <I3 />
    </>)
}