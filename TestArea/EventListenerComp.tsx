import React from "react";
import { useEffect } from "react";

// Week 8

export function EVL(){

    console.log('comp was loaded')
        useEffect(() => {
        const someFunc = () => {
            console.log("scroll (from TestArea/EventListenerComp)");
        };
        window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
    },[]);   


    return (<h1>hello there</h1>)
}