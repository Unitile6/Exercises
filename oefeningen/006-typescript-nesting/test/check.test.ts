
import { readFileSync } from 'fs';
import { maarten } from '../oefening';

describe('006-typescript-nesting', () => {
  it('should have typed "maarten" correctly', () => {
    const name: string = maarten.name;
    const age: number = maarten.age;
    
    const street: string = maarten.address.street;
    const zipCode: string = maarten.address.zipCode;
    const houseNumber: number = maarten.address.houseNumber;    
  
    expect(name).toBe('Maarten');
    expect(age).toBe(33);

    expect(street).toBe('Janjanssenburgt');
    expect(zipCode).toBe("1234 AB");
    expect(houseNumber).toBe(55);
  });

  it('should have changed the oefening:', () => {
    const file = readFileSync(
      './oefeningen/006-typescript-nesting/oefening.ts'
    );

    const lines = [
      `export const address = {`,
      `export const maarten = {`,
    ];

    for (const line of lines) {
      expect(file.toString().includes(line)).toBe(false);
    }
  });
});
