import { MouseEvent, useState } from 'react';

export function Oefening() {
  return <Counter initialValue={42} />;
}

type Props = {
  initialValue?: number;
};

export function Counter({ initialValue = 0 }: Props) {
  const [value, setValue] = useState(initialValue);

  function decrement(event: MouseEvent) {
    const modifier = event.shiftKey ? 10 : 1;

    setValue(value - modifier);
  }

  function increment(event: MouseEvent) {
    const modifier = event.shiftKey ? 10 : 1;

    setValue(value + modifier);
  }

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
