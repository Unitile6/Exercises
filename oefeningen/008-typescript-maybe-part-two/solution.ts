export type Person = {
  name: string;
};

export type Car = {
  licensePlate: string;
  owner?: Person;
};

export function getOwnerName(car: Car) {
  return car.owner?.name ?? '';
}

// Een verboser alternatief:
// export function getOwnerName(car: Car) {
//   if (car.owner) {
//     return car.owner.name;
//   } else {
//     return "";
//   }
// }

