import * as React from "react";

// Week 7

export const Parent = () => {
    return(
        <>
        <p>__________________________________________________________________________________</p>
            <p>Hier komt het Props Child</p>
            
            <Child text="Nick" />
            <Child text="en" />
            <Child text="Simon" />
        </>) 
}

type Props = {
    text: string;
}

export function Child({text}: Props) {
    return (
    <div>you passed the following: {text}</div>)
}


export default Parent;