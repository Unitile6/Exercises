/* import { useState, useEffect } from "react";

// Week ? 4 / 5 /6 ?

export function BasicUI(props){
    // This is a composite component that creates a basic user interface for prettyness
    <User />
    <Session />
}

export function User(){
    // This is a composite component that creates a basic 
    return(
        <p>{name}</p>
    )
}

export function Session(){
    return(
        <>
        <Date />
        <Time />
        </>
    )
}

export function Date(){
    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate();
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const formattedDate = currentDate.toLocaleDateString();
  
    return (
      <div>
        <h2>Actualized Date</h2>
        <p>Current Date: {formattedDate}</p>
      </div>
    );
  }
}
export function Time(){
        const [currentTime, setCurrentTime] = useState();
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentTime();
          }, 1000);
      
          return () => {
            clearInterval(intervalId);
          };
        }, []);
      
        const formattedTime = currentTime.toLocaleTimeString();
      
        return (
          <div>
            <h2>Actualized Time</h2>
            <p>Current Time: {formattedTime}</p>
          </div>
        );
      }
} */