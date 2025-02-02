import React from "react";
import { motion, spring } from "framer-motion";

// Created 07-05-2024

type Props = {
    isVisible?: boolean,
    toRotate?: number
}

export function Ninja({toRotate}: Props){
    return(
        <svg viewBox="0 0 600 600" width={40} height={40}>
        <motion.g
        animate={{rotate: toRotate}}
        transition={spring}>
  <path
    className="st0"
    d="M316.618,333.836c1.882-14.32,59.388-41.114,59.388-105.066c0-38.835,0-91.372,0-132.486 c0-59.388,35.41-100.501-130.192-95.937c-61.65,1.7-130.2,36.55-130.2,95.937c0,41.114,0,93.651,0,132.486 c0,63.952,57.506,90.746,59.388,105.066c5.712,43.4-138.19,34.263-143.902,178.164h214.714H460.52 C454.817,368.098,310.906,377.236,316.618,333.836z M245.815,203.644c0,0-52.537,18.274-68.525,11.415 c-15.988-6.851-29.699-45.686-13.71-86.792c0,0,34.262,6.852,82.236,6.852c47.964,0,82.227-6.852,82.227-6.852 c15.988,41.106,2.287,79.941-13.701,86.792C298.344,221.919,245.815,203.644,245.815,203.644z"
  />
  <path
    className="st0"
    d="M467.965,260.383c-11.234-8.411-24.482-9.509-29.69-2.559l-72.454,96.886 c13.066,6.538,28.741,14.486,44.126,25.448l68.847-92.05c1.42-1.873,2.104-4.201,2.104-6.718 C480.899,274.679,476.103,266.458,467.965,260.383z"
  />
  </motion.g>
  </svg>
    )
}

export default function Dot({isVisible}: Props){
    return isVisible ?
    <> 
            <svg>
                <a download={true}>
                </a>
                <circle cx={40} cy={40} r={10}></circle>
            </svg>

            </>
        :
        <>
            <svg>
                <a download={true} href="">
                </a>
                <circle cx={40} cy={40} r={10} fill="red"></circle>
            </svg>
            </>
    }