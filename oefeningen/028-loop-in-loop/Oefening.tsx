import classNames from 'classnames';
import './Oefening.css';

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

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <>  <div className="card">
  <h2 className="text-xl font-bold mt-4 text-center" style={{backgroundColor: "blue-200"}}>{pokemon.name}</h2>
</div></>
}
