import { motion } from "framer-motion"
import React from "react"
import { useState, useContext,createContext } from "react"
import ComplexSVG from "../Playground/images/Complex"
import SkypeSVG from "../Playground/images/SkypeSvgAll"
import { Button } from "@mui/material"
import AnimationButtons from "./FMTestButtons"
import {EVL as DataSender} from "./EventListenerComp"
import { EVL } from "./EventListenerComp"

// Week 7 / 8

export function FramermotionTest(){
  const dataContext = createContext('light')
  const theme = useContext(dataContext)

  const [settings, setSettings] = useState({rotate: 0, x: 0, y: 0})
  const [show, setShow] = useState(false);
  const handleClick = (event: React.SyntheticEvent) => {
     setShow(!show);
   }
   const handleUpdate = (event: React.SyntheticEvent) => {
    console.log("called handleUpdate from Parent.")
   }

  const [ANSet, SetAnSet] = useState({
    rotate: [0, 90, 0, -90],
    x: [3, 0, 3, 3],
    y: [0, 3, 3, 3]
  })
  const [TRSet, SetTRSet] = useState({
    times: [0, 1],
    duration: 2,
    repeat: Infinity,
    type: "keyframes",
    ease: "easeInOut",
    //delay: 3
    })
  
    let clicks = 0;
    console.log(clicks)
    function EventLog(){
      console.log("invoked event.")
      clicks += 1
      console.log(clicks)
    }

  if(show){
    return(<>
    <Button onClick={handleClick} >Switch Tab</Button>

<button onClick={() => EventLog}>| counterA |</button>
<button onClick={EventLog}>| counterB |)</button>

    <AnimationButtons onChange={handleUpdate}/>
      < SkypeSVG animate={ANSet}    transition={TRSet} width={200}/>
        </>)
    }
  else{
    return(<>
    <Button onClick={handleClick}>Switch Tab</Button>

      <DataSender />
    <AnimationButtons />
      < ComplexSVG />
        </>)
  }



}