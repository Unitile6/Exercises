import { readFileSync } from 'fs';
import { sum } from '../oefening';

describe('003-typescript-functions', () => {
  it('should have typed "sum" correctly', () => {
    const a: number = 2;
    const b: number = 40;
    const result: number = sum(a, b);

    expect(result).toBe(42);
  });
});
