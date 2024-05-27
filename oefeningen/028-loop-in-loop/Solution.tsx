import classNames from 'classnames';

// Zouden er meer moeten zijn maar dit voldoet voor nu.
type Type = 'grass' | 'poison' | 'water' | 'fire' | 'flying';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: Type[];
};

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: ['grass', 'poison'],
  },
  {
    id: 2,
    name: 'ivysaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    types: ['grass', 'poison'],
  },
  {
    id: 3,
    name: 'venusaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    types: ['grass', 'poison'],
  },
  {
    id: 4,
    name: 'charmander',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    types: ['fire'],
  },
  {
    id: 5,
    name: 'charmeleon',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    types: ['fire'],
  },
  {
    id: 6,
    name: 'charizard',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    types: ['fire', 'flying'],
  },
  {
    id: 7,
    name: 'squirtle',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    types: ['water'],
  },
  {
    id: 8,
    name: 'wartortle',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    types: ['water'],
  },
  {
    id: 9,
    name: 'blastoise',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    types: ['water'],
  },
];

export function Oefening() {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

type Props = {
  pokemon: Pokemon;
};

function PokemonCard({ pokemon }: Props) {
  return (
    <div className="shadow-xl border-2 border-slate-200 p-4 max-w-xs flex flex-col text-lg">
      <h1 className="text-xl font-bold mt-4 text-center capitalize">
        {pokemon.name}
      </h1>

      <img
        src={pokemon.sprite}
        alt={`${pokemon.name} sprite`}
        className="mx-auto h-32 w-32"
      />

      <div className="flex justify-center gap-2 text-right">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={classNames(
              'text-white py-1 px-4 capitalize',
              typesStyling[type]
            )}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

const typesStyling = {
  fire: 'bg-red-600',
  water: 'bg-blue-600',
  poison: 'bg-purple-600',
  grass: 'bg-green-600',
  flying: 'bg-cyan-600',
};
