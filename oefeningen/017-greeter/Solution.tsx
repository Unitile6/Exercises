import React from "react";

export function Oefening() {
  return <Greeter name="Maarten" age={33} />;
};

type Props = {
  name: string;
  age: number;
}

export function Greeter({ name, age}: Props) {
  return <p>Hi {name} your age is {age} years old</p>;
}