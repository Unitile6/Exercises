import React from "react";
// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <Greeter name="Maarten" age={33}/>;
}

type Props ={
  name: string;
  age: number
}

export function Greeter({name, age}: Props){
  return <div>Hi {name} your age is {age} years old</div>
}
