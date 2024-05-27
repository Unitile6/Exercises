type Car = {
  licensePlate: string;
  age: number;
  color: string;
  wheels: number;
};

export const car: Car = {
  licensePlate: 'AA-12-ZZ',
  age: 13,
  color: 'red',
  wheels: 4,
};

type Person = {
  name: string;
  twitter: string;
  age: number;
};

export const person: Person = {
  name: 'Maarten Hus',
  twitter: '@MrHus',
  age: 33,
};

type House = {
  street: string,
  zipCode: string,
  houseNumber: number,
  built:  number,
};

export const house: House = {
  street: 'Barnabystreet 55',
  zipCode: '1111 ZA',
  houseNumber: 12,
  built: 1989,
};
