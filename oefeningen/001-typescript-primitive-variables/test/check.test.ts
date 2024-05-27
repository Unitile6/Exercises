import { readFileSync } from 'fs';
import { a, b, c, d, e, f, g } from '../oefening';

describe('001-typescript-primitive-variables', () => {
  it('should have typed "a" as a number', () => {
    const result: number = a;

    expect(result).toBe(10);
  });

  it('should have typed "b" as a boolean', () => {
    const result: boolean = b;

    expect(result).toBe(true);
  });

  it('should have typed "c" as a boolean', () => {
    const result: boolean = c;

    expect(result).toBe(false);
  });

  it('should have typed "d" as a string', () => {
    const result: string = d;

    expect(result).toBe('pikachu');
  });

  it('should have typed "e" as a string', () => {
    const result: string = e;

    expect(result).toBe('');
  });

  it('should have typed "f" as a undefined', () => {
    const result: undefined = f;

    expect(result).toBe(undefined);
  });

  it('should have typed "g" as a null', () => {
    const result: null = g;

    expect(result).toBe(null);
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync('./oefeningen/001-typescript-primitive-variables/oefening.ts');

    const lines = [
      `export const a = 10;`,
      `export const b = true;`,
      `export const c = false;`,
      `export const d = "pikachu";`,
      `export const e = "";`,
      `export const f = undefined;`,
      `export const g = null;`,
    ];

    for (const line of lines) {
      expect(file.toString().includes(line)).toBe(false);
    }
  });
});
