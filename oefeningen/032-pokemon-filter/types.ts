// Zouden er meer moeten zijn maar dit voldoet voor nu.
export const types = ['grass', 'poison', 'water', 'fire', 'flying'];

export type Type = typeof types[number];

export type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: Type[];
  starter: boolean;
};
