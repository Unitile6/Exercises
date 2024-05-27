
export type Person = {
  name: string;
  age: number;
  children?: Person[];
};

export const maarten: Person = {
  name: 'Maarten',
  age: 33,
  children: [
    {
      name: 'Owen',
      age: 5
    },
    {
      name: 'Jane',
      age: 2
    },
  ],
};
