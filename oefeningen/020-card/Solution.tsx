import React, { ReactNode } from 'react';

export function Oefening() {
  return (
    <Card title="Bulbasaur">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="Bulbasaurs sprite"
        className="mx-auto h-32 w-32"
      />
      <p className="m-0">
        There is a plant seed on its back right from the day this Pokémon is
        born. The seed slowly grows larger.
      </p>
    </Card>
  );
}

type Props = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: Props) {
  return (
    <div className="shadow-xl border-2 border-slate-200 p-4 max-w-xs flex flex-col text-lg">
      <h1 className="text-xl font-bold mt-4 text-center">{title}</h1>

      {children}
    </div>
  );
}