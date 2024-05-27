import React, { useState } from "react";
import Path from '../Playground/images/CleanSVGPath'
import PathB from '../Playground/images/CleanSVGSVG'

type Props = {
    given: number;
}

export default function Overlapper({given}: Props){
    const jump = 10
    return(
        <>
        <label>test</label>
        <svg viewBox="0 0 8000 8000"  >
            <PathB width={100} animX={given*jump} animY={given*jump}/>
            <PathB width={100} animX={given*2*jump} animY={given*2*jump}/>
            <PathB width={100} animX={given*3*jump} animY={given*3*jump}/>
            <PathB width={100} animX={given*4*jump} animY={given*4*jump}/>
      </svg>
      </>
    )
}