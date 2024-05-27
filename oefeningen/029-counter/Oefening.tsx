import { useState } from 'react';
import './Oefening.css';
import classNames from 'classnames';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <div><Counter initValue={42}/></div>;
}

export function Counter(initValue: number){
  initValue ?? 0;

  function increment(event: MouseEvent){
    const modifier = event.shiftKey ? 10 : 1;
    setValue(value + modifier)
  }
  function decrement(event: MouseEvent){
    const modifier = event.shiftKey ? 10 : 1;
    setValue(value - modifier)
  }

  const [value,setValue] = useState(initValue)

  return (
    <div className='flex justify-center items-center gap-4'>
      <button
        className="p-4 text-xl text-white text-center border rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-400"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-xl w-8 text-center font-mono">{value}</span>
      <button
        className="p-4 text-xl text-white text-center border rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-400"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}