import React, { useEffect } from "react";
import { useState, useRef } from "react";
import ComplexSVG from "../Playground/images/Complex"
import SkypeSVG from "../Playground/images/SkypeSvgAll"
import SkypeSVG2 from "../Playground/images/SkypeSvgAllSimple"

// Date of Creation 17-04-2024
// Week 9

// Learning Goal: Testing of rotation and positioning of SVG on anchoring points.

export default function SVGRotateTest(){
    // (1) This test will test the SVG's rotation at a specific anchor. 
    // (2) It will use a useTimeout callback to simulate a two-frame dataset.
    // (3) Maybe I can do even a second one to simulate a three-frame dataset.
    // (4) Use for this random values?

    // State is required for the rendering and setting of value.
    const [val, setVal] = useState(0);

    //let value = 0;
    //let ref = useRef(0); // use a value not required for rendering. regular variables reset every render!
    // Also the information is local to each copy of the component. (unlike vars outside, which are shared)

    const theCallback = (value: number) => {
        setVal(val + value); // Hier wordt de render gedaan in de parent.
       // ref.current += value;
        console.log(`timeout reached with value ${value}`)
    }

    //setTimeout(theCallback, 200, 100);
    //setTimeout(theCallback, 1200, 300); // Deze twee leveren 'undefined' als value. 
    //setInterval(theCallback, 600, 20)

    useEffect(() => {
        setInterval(theCallback, 1000, 20)
    },[])
 

    // De timeouts blijven natuurlijk lopen omdat het telkens opnieuw re-rendert.
    // Tweede probleem is natuurlijk dat ik de Child state moet aanpassen en daarop een re-render moet plaatsvinden in dat child component.

    /* const fn = theCallback
    const ms = 1000
    const myTimeout = setTimeout(fn, ms)
    console.log("timeout id: "+myTimeout) // Hoisting effect misschien???
    clearTimeout(myTimeout); */

const editor_only_useComplex = false

// Version with object in props
/*     return( 
    editor_only_useComplex 
        ? <ComplexSVG width={300} animate={{rotate: [val], x: [], y: [] }} />
        : <SkypeSVG width={300} animate={{rotate: [val], x: [], y: [] }} transition={{times: [], duration: 0, repeat: Infinity, type: 'Tween', ease: 'circInOut'}} />    
   ) */
// Version without object in props
    return( 
        editor_only_useComplex 
        ? <ComplexSVG width={300} animate={{rotate: [val], x: [], y: [] }} />
        : <SkypeSVG2 width={300} rotate={val} />    
    )
    // Bevinding: Niets te maken met object of directe aansturing. Hij updatet niet.
}





    //setTimeout(theCallback(100), 200); // Werkt niet. Error. Geen directe manip mogelijk
    // Daarom set op anonieme func.
    //setTimeout(() => theCallback(100), 200);
    //setTimeout(() => theCallback(500), 800); // Deze krijgen wel waarde binnen. maar (1) rerenderen niets. (2) blijven lopen.
    // Poging met useeffect op éénmalig render.
   /*  useEffect(()=>{
        setTimeout(() => theCallback(100), 200);
        setTimeout(() => theCallback(500), 800); // Deze krijgen wel waarde binnen. maar (1) rerenderen niets. (2) blijven lopen.
    }, []) */
    // Dus derde poging:
    /* setTimeout(function(){theCallback(100)},100)
    setTimeout(function(){theCallback(200)},800) */
    // poging met derde arg:
    //setTimeout(theCallback, 200, [200]);
    //setTimeout(theCallback, 800, [800]); // Deze twee leveren 'undefined' als value. 