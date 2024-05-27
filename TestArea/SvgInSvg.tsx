import React from "react";
import { useState } from "react";
import SkypeSVG from '../Playground/images/SkypeSvgAllSimple'
import { motion } from "framer-motion";

// Week 10 dinsdag

export default function SvgInSvg(){
    return (
    <>
        <motion.svg fill={'red'}
        animate={{
            rotate: 0,
            x: 0,
            y: 0,
            originX: 0,
            originY: 0
}}>
            <SkypeSVG x={-20}
            y={-20}
            animX={-20} 
            animY={0} 
            origin={-10}/>
        </motion.svg>
        <svg>
            <SkypeSVG />
            <SkypeSVG />
            <SkypeSVG />
            <SkypeSVG />
        </svg>
    </>)
}