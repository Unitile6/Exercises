
import { Color } from '../oefening';

describe('012-union-part-one', () => {
  it('should typed union Color correctly', () => {
    const red: Color = 'red';
    const white: Color = 'white';
    const blue: Color = 'blue';

    expect(red).toBe('red');
    expect(white).toBe('white');
    expect(blue).toBe('blue');
  });
});
