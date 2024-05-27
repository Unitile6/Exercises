
type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};

export function Oefening() {
  // Deze pokemons array moet je dus niet hardcoded neerzetten,
  // maar gaan ophalen van de back-end.
  const pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: 2,
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      id: 3,
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
  ];

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
    </div>
  );
}
