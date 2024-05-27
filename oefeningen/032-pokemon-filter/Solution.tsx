import { useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { Pokemon, Type, types } from './types';

export function Oefening() {
  const [pokemons] = useState<Pokemon[]>(() => [
    {
      id: 1,
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['grass', 'poison'],
      starter: true,
    },
    {
      id: 2,
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      types: ['grass', 'poison'],
      starter: false,
    },
    {
      id: 3,
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      types: ['grass', 'poison'],
      starter: false,
    },
    {
      id: 4,
      name: 'charmander',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      types: ['fire'],
      starter: true,
    },
    {
      id: 5,
      name: 'charmeleon',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      types: ['fire'],
      starter: false,
    },
    {
      id: 6,
      name: 'charizard',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      types: ['fire', 'flying'],
      starter: false,
    },
    {
      id: 7,
      name: 'squirtle',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      types: ['water'],
      starter: true,
    },
    {
      id: 8,
      name: 'wartortle',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      types: ['water'],
      starter: false,
    },
    {
      id: 9,
      name: 'blastoise',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      types: ['water'],
      starter: false,
    },
  ]);

  const [query, setQuery] = useState('');
  const [showStarters, setShowStarters] = useState(false);
  const [type, setType] = useState<Type | ''>('');

  function toggleShowStarters() {
    setShowStarters(!showStarters);
  }

  // Dit kan ook allemaal in één filter aanroep, 
  // in plaats van in drie losse aanroepen, maar
  // dit vind ik het meest helder.
  const filteredPokemons = pokemons
    .filter((pokemon) => (type ? pokemon.types.includes(type) : true))
    .filter((pokemon) => (showStarters ? pokemon.starter : true))
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="w-full p-4">
      <div className="grid gap-2 mb-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="search"
          placeholder="Search by name"
          className="w-full border my-2 p-2"
        />

        <div className="flex justify-between">
          <label className="flex gap-2">
            Show starters:
            <input
              checked={showStarters}
              onChange={toggleShowStarters}
              name="showStarter"
              type="checkbox"
            />
          </label>

          <label className="flex gap-2">
            Types:
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="">Geen filter</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
