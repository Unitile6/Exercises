import { readFileSync } from 'fs';
import { person, persons, names } from '../oefening';

describe('011-type-inference-part-two', () => {
  it('should type names correctly', () => {
    const n: string[] = names;

    expect(n).toEqual(['Maarten', 'Tosca', 'Owen', 'Jane']);
  });

  it('should type person correctly', () => {
    const name: string = person.name;
    const age: number = person.age;

    expect(name).toEqual('Maarten');
    expect(age).toEqual(33);
  });

  it('should type persons correctly', () => {
    const name: string = persons[0].name;
    const age: number = persons[0].age;

    expect(name).toEqual('Jan');
    expect(age).toEqual(33);

    expect(persons).toEqual([
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
    ]);
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync(
      './oefeningen/011-type-inference-part-two/oefening.ts'
    );

    const lines = [
      `export const names = ['Maarten', 'Tosca', 'Owen', 'Jane'];`,
      `export const person = {`,
      `export const persons = [`,
    ];

    for (const line of lines) {
      expect(file.toString().includes(line)).toBe(false);
    }
  });
});
