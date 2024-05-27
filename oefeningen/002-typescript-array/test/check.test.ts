import { readFileSync } from 'fs';
import { a, b, c } from '../oefening';

describe('002-typescript-array', () => {
  it('should have typed "a" as an array of number', () => {
    const result: number[] = a;

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should have typed "b" as an array of booleans', () => {
    const result: boolean[] = b;

    expect(result).toEqual([true, false, true, false, false]);
  });

  it('should have typed "c" as an array of strings', () => {
    const result: string[] = c;

    expect(result).toEqual(['pikachu', 'bulbasaur', 'mew', 'dugtrio']);
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync(
      './oefeningen/002-typescript-array/oefening.ts'
    );

    const lines = [
      `export const a = [1, 2, 3, 4, 5, 6];`,
      `export const b = [true, false, true, false, false];`,
      `export const c = ["pikachu", "bulbasaur", "mew", "dugtrio"];`,
    ];

    for (const line of lines) {
      expect(file.toString().includes(line)).toBe(false);
    }
  });
});
