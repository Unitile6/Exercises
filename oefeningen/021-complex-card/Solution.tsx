import React, { ReactNode } from 'react';

export function Oefening() {
  return (
    <Card
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
        className="mx-auto h-32 w-32"
      />
      <p>
        There is a plant seed on its back right from the day this Pokémon is
        born. The seed slowly grows larger.
      </p>
    </Card>
  );
}

type Props = {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

export function Card({ header, children, footer }: Props) {
  return (
    <div className="shadow-xl border-2 border-slate-200 max-w-xs flex flex-col text-lg">
      <div className="border-b-2 bg-slate-100 p-4">{header}</div>

      <div className="p-4">{children}</div>

      <div className="border-t-2 bg-slate-100 p-4">{footer}</div>
    </div>
  );
}
