
export const address: Address = {
  street: "Janjanssenburgt",
  houseNumber: 55,
  zipCode: "1234 AB"
};

export const maarten: Person = {
  name: "Maarten",
  age: 33,
  address,
  children: [{
      name: "Owen",
      age: 5,
      address,
      children: []
  }, {
      name: "Jane",
      age: 2,
      address,
      children: []
  }]
};

type Person = {
name: string;
age: number;
address: Address;
children: Person[];
}

type Address = {
  street: string;
  houseNumber: number;
  zipCode: string;
}