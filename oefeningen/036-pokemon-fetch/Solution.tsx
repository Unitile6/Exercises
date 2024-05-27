import { useEffect, useState } from 'react';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};

export function Oefening() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Een simpele fetch oplossing:

  useEffect(() => {
    async function loadPokemon() {
      const response = await fetch('/api/pokemon');
      const json = await response.json();

      setPokemons(json.content);
    }

    loadPokemon();
  }, []);


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
