
import { readFileSync } from 'fs';
import { name, age, lovesPinball } from '../oefening';

describe('010-type-inference-part-one', () => {
  it('should still know the types without being explicit', () => {
    const n: string = name;
    const a: number = age;
    const l: boolean = lovesPinball;

    expect(n).toBe('Maarten');
    expect(a).toBe(33);
    expect(l).toBe(true);
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync('./oefeningen/010-type-inference-part-one/oefening.ts');

    const lines = [
      `export let name: string = "Maarten";`,
      `export let age: number = 33;`,
      `export let lovesPinball: boolean = true;`
    ];

    for (const line of lines) {
      expect(file.toString().includes(line)).toBe(false);
    }
  });
});
