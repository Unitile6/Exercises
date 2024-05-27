import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

// Week 7 / 8

function Parent() {
    const callThisFromChildComponent = (value: number) => {
        console.log(`Child passed in ${value}`);
    };

    return(
        <>
         <p>__________________________________________________________________________________</p>
        <p>Hier komt het Callback Child.</p>
       
         <Child callback={callThisFromChildComponent} /> 
        </>
    )
}

interface CallbackOneParam<T1, T2 = void> {
    (param1: T1): T2;
}

function Child(callback: CallbackOneParam<number>){
    const data = 1234;

    return <Button variant="contained" onClick={() => callback(data)}>
        Pass data to Parent Component
    </Button>
}

export default Parent;