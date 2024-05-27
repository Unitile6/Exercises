
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
  return <h1>{diceCallout(side)}</h1>;
}

// Helper functions
function diceCallout(result: number){
    switch (result) {
    case 1:
      return "Lucky number one"

    case 2:
      return "Snake eyes"

    case 3:
      return "Third times a charm"

    case 4:
      return "Quattro formaggi"

    case 5:
      return "Fullhouse"
    case 6:
      return "Watch my six"
  }
}
