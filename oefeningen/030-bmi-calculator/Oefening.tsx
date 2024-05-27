import React from 'react';
import { ChangeEvent, useState } from 'react';
import './Oefening.css';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <>
  <BMICalculator />
        </>;
}

// Helpers

function isNumeric(value: string): boolean {
  return /^\d*\.?\d+$/.test(value);
}

function calculateBMI(weight: number, height: number): number {
  return weight / (height * height);
}

function handleWeightChange(): void{
  
}
function handleHeightChange(): void{
  
}

type Props = {
  height: string;
  weight: string;
  bmi: number;
}
export function BMICalculator({height = "14",weight = "17", bmi = 0}: Props){
  return (
    <>
    <label>BMI Calculator</label>
    <p></p>
      <label>Height (cm)</label>
      <input type="string" defaultValue={height} onChange={handleHeightChange} /> 
      <label>Weight (kg)</label>
      <input type="string" defaultValue={weight} onChange={handleWeightChange} />
      {bmi && <p>Your BMI: {bmi}</p>}
    </>
  );
}

