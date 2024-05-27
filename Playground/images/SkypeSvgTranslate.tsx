import * as React from "react"
import { SVGProps } from "react"
import {motion} from "framer-motion"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="#000000"
    //width="800px"
    //height="800px"
    viewBox="0 0 24 24"
    id="skype"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <motion.path
      id="secondary"
      animate={{y: [-40,0,-40]}}
      transition={{
        times:[0,1],
        duration: 5,
        repeat: Infinity,
        type: "keyframes",
        ease: "easeInOut",
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
