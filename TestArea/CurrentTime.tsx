import { useState, useEffect } from "react"

// Week 5 /6

export function Time(){
    //let curTime = new Date().getTime()
    // Time since 1970. Laatste 3 zijn ms.
    //curTime /= 1000;

    const curTime = Math.floor(Date.now() / 1000);
    const [newTime, setTime] = useState(curTime);

    setInterval(() => {
        setTime(newTime + 1);
   })

    return <>
    <p>Started Time: {curTime}</p>
    <p>Current Time: {newTime}</p></>

}

export default Time

export const App = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div 
        style = {{
            display: "flexbox",
            margin: "auto",
            textAlign: "center",
        }}
        >
            <h1 style={{color: "green"}}>
                GeeksforGeeks
            </h1>
            <h3>
                React Example for using setInterval method
            </h3>
            <h1>{count}</h1>
        </div>
    );
};
