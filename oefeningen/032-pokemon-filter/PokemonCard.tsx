import classNames from 'classnames';
import { Pokemon, Type } from './types';

type Props = {
  pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: Props) {
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

const typesStyling: Record<Type, string> = {
  fire: 'bg-red-600',
  water: 'bg-blue-600',
  poison: 'bg-purple-600',
  grass: 'bg-green-600',
  flying: 'bg-cyan-600',
};
