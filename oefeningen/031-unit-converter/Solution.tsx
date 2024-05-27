import { useState } from 'react';

const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'] as const;

type Unit = typeof units[number];

export function Oefening() {
  return <UnitConverter />;
}

export function UnitConverter() {
  const [a, setA] = useState('1');
  const [b, setB] = useState('1000');

  const [aUnit, setAUnit] = useState<Unit>('km');
  const [bUnit, setBUnit] = useState<Unit>('m');

  function changeUnitA(unit: Unit) {
    setAUnit(unit);

    const number = parseFloat(b);
    setA(convert(number, bUnit, unit).toString());
  }

  function changeUnitB(unit: Unit) {
    setBUnit(unit);

    const number = parseFloat(a);
    setB(convert(number, aUnit, unit).toString());
  }

  function changeValueA(text: string) {
    const number = parseFloat(text);

    setA(text);

    if (!isNaN(number)) {
      setB(convert(number, aUnit, bUnit).toString());
    }
  }

  function changeValueB(text: string) {
    const number = parseFloat(text);

    setB(text);

    if (!isNaN(number)) {
      setA(convert(number, bUnit, aUnit).toString());
    }
  }

  return (
    <form className="grid max-w-sm w-full gap-2 p-4 border shadow-xl">
      <strong className="text-xl">Convertor</strong>
      <div className="flex">
        <select
          value={aUnit}
          onChange={(event) => changeUnitA(event.target.value as Unit)}
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>

        <input
          value={a}
          onChange={(event) => changeValueA(event.target.value)}
          className="border p-2 w-full"
        />

        <select
          value={bUnit}
          onChange={(event) => changeUnitB(event.target.value as Unit)}
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>

        <input
          value={b}
          onChange={(event) => changeValueB(event.target.value)}
          className="border p-2 w-full"
        />
      </div>

      {!isNumeric(a) || !isNumeric(b) ? (
        <p className="text-red-400 mb-0 flex-grow">Please enter a number</p>
      ) : null}
    </form>
  );
}

// Helpers

function isNumeric(value: string): boolean {
  return /^\d*\.?\d+$/.test(value);
}

function convert(value: number, from: Unit, to: Unit): number {
  // Als de units hetzelde zijn dan zijn we al klaar en hoeven we
  // niets te doen met de value.
  if (from === to) {
    return value;
  }

  /*
    Het idee achter deze formule is dat iedere eenheid telkens 10 keer
    groter is dan de volgende eenheid.
    
    Elke beweging naar rechts is dan een keer 10 en elke beweging 
    naar links is dan een delen door 10.

    Bijvoorbeeld km naar rechts bewegend:
    1 km = 10 hm = 100dam = 1000m = 10.000dm = 100.000cm = 1.000.000 mm

    Neem de conversie van "km" naar "m" als voorbeeld:

      0     1     2      3    4 .   5 .   6
    ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']

    De index van "km" is 0, en de index van "m" is 3. Dit betekend
    date de afstand 3 is, dus dat betekent dat we 3 keer een keer 10
    moeten uitvoeren.
  */

  const toIndex = units.indexOf(from);
  const fromIndex = units.indexOf(to);

  /* 
    Math.abs pakt het absolute getal, dit betekent eigenlijk dat een
    negatief getal een positief getal wordt, bijvoorbeeld: -10 wordt 
    10 en -3 wordt 3. Positieve getallen blijven zoals ze zijn.

    Dit betekent dat we altijd een positief getal krijgen als we de
    "to" van de "from" afhalen. 
    
    Bijvoorbeeld: 

    km  cm
    0 - 5 = 5
    5 - 0 = 5

    Met de "distance" (afstand) weten we weer hoevaak we een 
    keer 10 of delen door 10 moeten uitvoeren.
  */
  const distance = Math.abs(toIndex - fromIndex);

  // Gaan we naar links of naar rechts
  const movingRight = fromIndex > toIndex;

  // De ** is de "tot de macht" operator.
  // 10 ** 3 = 10 * 10 * 10 = 1000

  if (movingRight) {
    return value * 10 ** distance;
  } else {
    return value / 10 ** distance;
  }
}
