import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

// Week 7 / 8

type Props = {
    num: number
}

type Callback = {
    callback: Function
}

function Display({num}: Props){
    return <div>{num}</div>
}

function Dice({callback}: Callback){
    return(
        <Button onClick={() => callback(Math.floor(Math.random() * 6) + 1)} variant="contained">Roll Dice</Button>
        );
}

function Parent() {
    const [num, setNum] = React.useState(1);
    return (
        <div>
            <Display num={num} />
            <Dice callback={setNum} />
        </div>
    )
}

export default Parent;