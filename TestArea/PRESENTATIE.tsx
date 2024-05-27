import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import {motion} from 'framer-motion'
import SkypeSvgTranslate from "../Playground/images/SkypeSvgTranslate"
import SkypeSvgRotate from "../Playground/images/SkypeSvgRotate"
import SkypeSvgScale from "../Playground/images/SkypeSvgScale"
import GitCatSvg from "../Playground/images/GitCatSvg"

import {KeypointsWithSVG as A1} from "../Playground/Components/iDBPSData";
import {KeypointsWithSVG} from "../Playground/Components/iDBPSDataWithVis";
import {KeypointsWithSVG as I3} from "../Playground/Components/i3";
import S1 from "../Playground/images/Crab2Svg"
import classNames from "classnames";
import Time from "./CurrentTime"
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

import {Arm} from './SVGFiles'

export default function Presentatie(){

    const [diaStep, setDiaStep] = useState(0)
    const [anchorPosition, setAnchorPosition] = useState({ x: 20, y: 20 });
    const [endPosition, setEndPosition] = useState({ x: 20, y: 20 });
    const [dimensions, setDimensions] = useState({w: 20, h: 20})
  

    const [isColo, setColo] = useState(true)
    const [isRot, setRot] = useState(0)
    function ChangeColor(){
     setColo(!isColo)
    }
    function DoRotate(){
     setRot(isRot + 90)
    }
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
  
      setAnchorPosition({x: 0, y: 0})
    };
    const [posi,setPosi] = useState(1)
    function changePosiInParent(){
        let x = Math.floor(Math.random() * 100)
        setPosi(x)
        console.log('sucees')
      }
      const [show, setShow] = useState(true)
      function handleClick2(){
        setShow(!show)
      }

    function increaseDia(){
        setDiaStep(diaStep + 1)
    }
    const MotionArm = motion(Arm);
    switch(diaStep){
        case 0:
            return(
            <>
                <Button variant="contained" onClick={increaseDia}>
                    Volgende dia
                </Button>
                <h1> Welkom bij SVG animatie</h1>
                <h2> Voortgang: week</h2>
                <motion.path d="M1.906 2.625h5.469v22.969h-2.281v-20.75h-3.188v-2.219z"></motion.path>

            
                <div style={{ display: 'flex' }}>
                <SkypeSvgTranslate width={800}/>
                <SkypeSvgRotate width={800}/>
                <SkypeSvgScale width={800}/>
                </div>
                <h1> Remco Verbaten Ad-ICT Afstudeerstage</h1>
            </>
            )
        case 1:
            return(
                <>
                    <Button variant="contained" onClick={increaseDia}>
                        Volgende dia
                    </Button>
                    <h1> INHOUD </h1>
                    <h2> Huidige status:</h2>
                    <h3>        1 Testen van Anchor Points </h3>
                    <h3>        2 Testen van Svg-nesting </h3>
                    <h3>        3 Testen van lag-bestendigheid </h3>
                    <GitCatSvg />
                </>
                )
        case 2:
            return(
                <>
                    <Button variant="contained" onClick={increaseDia}>
                        Volgende dia
                    </Button>
                    <h1> Current Dia:</h1>
                    <h2>Testen van Anchor Points </h2>
                    <SvgAnchorOverlay3 />
                    <label> svg start/endpoints werken</label>
                    <label> anchorpoints blijkt echter moeilijk. Eigen bestandstype?</label>
                </>
                )
        case 3:
            return(
                <>
                    <Button variant="contained" onClick={increaseDia}>
                        Volgende dia
                    </Button>
                    <h1> Current Dia:</h1>
                    <h2>Testen van Svg-nesting </h2>
                    <Button variant="contained" color="secondary" onClick={changePosiInParent}>Changepos</Button>

                  <CleanPath given={posi}/>
                  <label>Resultaat: svg nesting werkt; path nesting werkt;</label>
                  <label>Probleem: Koppelen van ankerpunten. Nog geen resultaat.</label>
                </>
                )
        case 4:
            return(
                <>
                    <Button variant="contained" onClick={increaseDia}>
                        Volgende dia
                    </Button>
                    <Button variant="contained" onClick={DoRotate} color="secondary">ROTATE</Button>
                    <h1> Current Dia:</h1>
                    <h2>Testen van lag-bestendigheid </h2>
                    <NinjaGrid numberOfNinjas={250} isRot={isRot}/>
                    <h3> Resultaat: tot 250 eenvoudige animaties.</h3>
                    <label>Niet getest: Complexe animaties, grootte v.d. image</label>
                </>
                )
        case 5:
            return(
                <>
                    <Button variant="contained" onClick={increaseDia}>
                        Volgende dia
                    </Button>
                    <h1>Komende week:</h1>
                    <h2>Skeleton animation</h2>
                    <label>Skeleton animation</label>
                   <KeypointsWithSVG />
                   <label>Linken van voorgaande dia's tot (on?)gewenst resultaat</label>
                </>
                )
        case 6:
            return(
                <>
                    <h1>Dank voor de aandacht!</h1>
                    <h1>Vragen? Opmerkingen?</h1>
                    <h2>Tot ziens eh.</h2>
                </>
            )
    }
}