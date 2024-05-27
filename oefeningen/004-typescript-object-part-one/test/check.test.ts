import { readFileSync } from 'fs';
import { country } from '../oefening';

describe('004-typescript-object-part-one', () => {
  it('should have typed "country" correctly', () => {
    const language: string = country.language;
    const name: string = country.name;
    const population: number = country.population;
    const type: string = country.type;

    expect(language).toBe('Dutch');
    expect(name).toBe('The Netherlands');
    expect(population).toBe(17);
    expect(type).toBe('democracy');
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync(
      './oefeningen/004-typescript-object-part-one/oefening.ts'
    );

    expect(file.toString().includes(`export const country: {`)).toBe(false);
  });
});
