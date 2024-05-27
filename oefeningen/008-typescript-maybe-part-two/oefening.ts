
export type Person = {
  name: string;
};

export type Car = {
  licensePlate: string;
  owner?: Person;
};

// Maak de functie getOwnerName hier en vergeet deze niet te exporteren!
export function getOwnerName(car: Car){
  if(car.owner){
    return car.owner.name;
  }
  else
  {
    return "";
  }
}