
export const names: string[] = ['Maarten', 'Tosca', 'Owen', 'Jane'];

export const person: Person = {
  name: 'Maarten',
  age: 33,
};

export const persons: Person[] = [
  {
    name: 'Jan',
    age: 33,
  },
  {
    name: 'Dirk',
    age: 66,
  },
  {
    name: 'Phoebe',
    age: 40,
  },
];

type Person = {
  name: string;
  age:number;
}