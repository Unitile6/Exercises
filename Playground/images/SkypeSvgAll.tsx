import * as React from "react"
import { SVGProps } from "react"
import {motion} from "framer-motion"

interface Props {
    animate: {
        rotate: number[],
        x: number[],
        y: number[],
      };
      transition: {
        times: number[],
        duration: number,
        repeat: number,
        type: string,
        ease: string
      }
    }

type CombinedProps = SVGProps<SVGSVGElement> & Props;

const SvgComponent = (props: CombinedProps) => (
  <svg
    fill="#000000"
    width = {600}

    viewBox="0 0 24 24"
    id="skype"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <motion.path
id="secondary"
animate={{
  rotate: props.animate.rotate,
  x: props.animate.x,
  y: props.animate.y
}}
transition={{
  times: props.transition.times,
  duration: props.transition.duration,
  repeat: props.transition.repeat,
  type: props.transition.type,
  ease: props.transition.ease
}}
      d="M14.59,9a2,2,0,0,0-1.73-1H11.14a2,2,0,0,0-2,2,2,2,0,0,0,2,2h1.72a2,2,0,0,1,2,2,2,2,0,0,1-2,2H11.14a2,2,0,0,1-1.73-1"
      style={{
        fill: "none",
        stroke: "rgb(44, 169, 188)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary"
      d="M19.85,13.52A7.61,7.61,0,0,0,20,12a8,8,0,0,0-8-8,7.61,7.61,0,0,0-1.52.15A4.44,4.44,0,0,0,7.5,3,4.51,4.51,0,0,0,3,7.5a4.44,4.44,0,0,0,1.15,3A7.61,7.61,0,0,0,4,12a8,8,0,0,0,8,8,7.61,7.61,0,0,0,1.52-.15,4.44,4.44,0,0,0,3,1.15A4.51,4.51,0,0,0,21,16.5,4.44,4.44,0,0,0,19.85,13.52Z"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
)
export default SvgComponent