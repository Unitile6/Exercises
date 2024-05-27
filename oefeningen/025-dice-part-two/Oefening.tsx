
import React, { ReactNode } from 'react';

// Pas de functie "Oefening" niet aan.
export function Oefening() {
  return (
    <div>
      <Dice side={1} />
      <Dice side={2} />
      <Dice side={3} />
      <Dice side={4} />
      <Dice side={5} />
      <Dice side={6} />
    </div>
  );
}

type DiceSide = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  side: DiceSide;
};


export function Dice({ side }: Props) {
  return <h1>{callouts[side]}</h1>;
}
const callouts = { 
  1: "Lucky number one",
  2: "Snake eyes",
  3: "Third times a charm",
  4: "Quattro formaggi",
  5: "Fullhouse",
  6: "Watch my six",
  }
