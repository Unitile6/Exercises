import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

interface Props {
  animRotate?: number;
  animX?: number;
  animY?: number;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  size?: { w: number; h: number };
}

type CombinedProps = SVGProps<SVGSVGElement> & Props;

const SvgComponent = (props: CombinedProps) => {
  // Apply the lowerCoordinates function to modify the path data

  return (
    <motion.g
    animate={{x: props.animX, y: props.animY}}>
      <path d="M160.276,77.934v280.061c-13.689-7.868-30.001-12.444-47.5-12.444v155
        c48.248,0,87.5-34.766,87.5-77.5V179.244l235-58.141v168.855c-13.689-7.868-30.001-12.444-47.5-12.444v155
        c48.248,0,87.5-34.766,87.5-77.5V0L160.276,77.934z M200.276,138.038v-28.794l235-58.141v28.794L200.276,138.038z"/>
      <path d="M300.276,355.014c0,42.734,39.252,77.5,87.5,77.5v-155
        C339.528,277.514,300.276,312.28,300.276,355.014z"/>
      <path d="M25.276,423.051c0,42.734,39.252,77.5,87.5,77.5v-155C64.528,345.551,25.276,380.317,25.276,423.051
        z"/>
    </motion.g>
  );
};

export default SvgComponent;
