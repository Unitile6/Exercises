import './Oefening.css';
import { Card } from '../020-card/Oefening';
import { ReactNode } from 'react';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <CompleteCard
  header={<h1 className="text-center text-xl font-bold">Bulbasaur</h1>}
  footer={
    <div className="flex justify-end gap-2 text-right">
      <span className="bg-green-600 text-white p-2">Grass</span>
      <span className="bg-purple-600 text-white p-2">Poison</span>
    </div>
  }
>
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    alt="Bulbasaurs sprite"
    className="mx-auto h-32 w-32 m-0"

  />
  <p className="m-0">
    There is a plant seed on its back right from the day this Pokémon is
    born. The seed slowly grows larger.
  </p>
</CompleteCard>;
}

type Props = {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}
export function CompleteCard({header, footer,children}: Props){
  return <div className="max-w-xs">
    <div className="border-b-2 bg-cyan-100 p-4 m-0">{header}</div>
    <div className="p-4">{children}</div>
    <div className="flex justify-end items-center p-2 border-t-2 bg-cyan-100 p-4">{footer}</div>
  </div>
}
