
import { getOwnerName, Person, Car } from '../oefening';

describe('008-typescript-maybe-part-two', () => {
  it('should return an empty string when owner is undefined', () => {
    const car: Car = {
      licensePlate: 'ABC-123',
      owner: {
        name: 'Bert',
      },
    };

    expect(getOwnerName(car)).toBe('Bert');
  });

  it('should return owners name when owner is defined.', () => {
    const car: Car = {
      licensePlate: 'ABC-123',
    };

    expect(getOwnerName(car)).toBe('');
  });
});
