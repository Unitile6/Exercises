import { ChangeEvent, useState } from 'react';

export function Oefening() {
  return <BMICalculator />;
}

export function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function weightChanged(event: ChangeEvent<HTMLInputElement>) {
    setWeight(event.target.value);
  }

  function heightChanged(event: ChangeEvent<HTMLInputElement>) {
    setHeight(event.target.value);
  }

  return (
    <form className="m-4 max-w-md w-full grid gap-4 p-4 border shadow mb-4">
      <div className="grid gap-1">
        <label htmlFor="weight" className="font-bold">
          Weight
        </label>
        <input
          id="weight"
          name="weight"
          className="border p-2 w-full"
          value={weight}
          onChange={weightChanged}
        />
        {!isNumeric(weight) ? (
          <p className="text-red-400 m-0">
            Please enter a number for the weight.
          </p>
        ) : null}
      </div>

      <div className="grid gap-1">
        <label htmlFor="height" className="font-bold">
          Height
        </label>
        <input
          id="height"
          name="height"
          className="border p-2 w-full"
          value={height}
          onChange={heightChanged}
        />
        {!isNumeric(height) ? (
          <p className="text-red-400 m-0">
            Please enter a number for the height.
          </p>
        ) : null}
      </div>

      {isNumeric(height) && isNumeric(weight) ? (
        <p className="m-0">
          Your BMI is {calculateBMI(parseFloat(weight), parseFloat(height)).toFixed(1)}
        </p>
      ) : null}
    </form>
  );
}

// Helpers

function isNumeric(value: string): boolean {
  return /^\d*\.?\d+$/.test(value);
}

function calculateBMI(weight: number, height: number): number {
  return weight / (height * height);
}
