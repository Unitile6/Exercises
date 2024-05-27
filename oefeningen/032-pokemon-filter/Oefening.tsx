import { useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { Pokemon, types } from './types';

import "./Oefening.css";

export function Oefening() {
  const [pokemons] = useState<Pokemon[]>(() => [
    {
      id: 1,
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['grass', 'poison'],
      starter: true
    },
    {
      id: 2,
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      types: ['grass', 'poison'],
      starter: false
    },
    {
      id: 3,
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      types: ['grass', 'poison'],
      starter: false
    },
    {
      id: 4,
      name: 'charmander',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      types: ['fire'],
      starter: true
    },
    {
      id: 5,
      name: 'charmeleon',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      types: ['fire'],
      starter: false
    },
    {
      id: 6,
      name: 'charizard',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      types: ['fire', 'flying'],
      starter: false
    },
    {
      id: 7,
      name: 'squirtle',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      types: ['water'],
      starter: true
    },
    {
      id: 8,
      name: 'wartortle',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      types: ['water'],
      starter: false
    },
    {
      id: 9,
      name: 'blastoise',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      types: ['water'],
      starter: false
    },
  ]);

  return (
    <div className="w-full p-4">
      {/* Maak de filters hier */}
      <div className="grid lg:grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}


