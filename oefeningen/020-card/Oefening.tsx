import { ReactNode } from 'react';
import './Oefening.css';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.

type Props = {
  title: string;
  children: ReactNode;
}
export function Oefening() {
  return <Card title="Bulbasaur">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      alt="Bulbasaurs sprite"
      className="mx-auto h-32 w-32"
    />
    <p>
      There is a plant seed on its back right from the day this Pokémon is
      born. The seed slowly grows larger.
    </p>
  </Card>
}

export function Card({title, children}:Props){
  return <>
  <div className="card">
    <h2 className="text-xl font-bold mt-4 text-center" style={{backgroundColor: "blue-200"}}>{title}</h2>
    {children}
  </div>
  </>
}
