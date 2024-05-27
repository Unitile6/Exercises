
import { readFileSync } from 'fs';
import { person, house, car } from '../oefening';

describe('005-typescript-object-part-two', () => {
  it('should have typed "car" correctly', () => {
    const licensePlate: string = car.licensePlate;
    const age: number = car.age;
    const color: string = car.color;
    const wheels: number = car.wheels;

    expect(licensePlate).toBe('AA-12-ZZ');
    expect(age).toBe(13);
    expect(color).toBe('red');
    expect(wheels).toBe(4);
  });

  it('should have typed "person" correctly', () => {
    const name: string = person.name;
    const twitter: string = person.twitter;
    const age: number = person.age;

    expect(name).toBe('Maarten Hus');
    expect(twitter).toBe('@MrHus');
    expect(age).toBe(33);
  });

  it('should have typed "house" correctly', () => {
    const street: string = house.street;
    const zipCode: string = house.zipCode;
    const houseNumber: number = house.houseNumber;
    const built: number = house.built;

    expect(street).toBe('Barnabystreet 55');
    expect(zipCode).toBe('1111 ZA');
    expect(houseNumber).toBe(12);
    expect(built).toBe(1989);
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync(
      './oefeningen/005-typescript-object-part-two/oefening.ts'
    );

    const lines = [
      `export const car = {`,
      `export const person = {`,
      `export const house = {`,
    ];

    for (const line of lines) {
      expect(file.toString().includes(line)).toBe(false);
    }
  });
});
