
import { NumberOrBoolean } from '../oefening';

describe('013-union-part-two', () => {
  it('should typed union NumberOrBoolean correctly', () => {
    const number: NumberOrBoolean = 12;
    const t: NumberOrBoolean = true;
    const f: NumberOrBoolean = false;

    // @ts-expect-error string should not be allowed
    const string: NumberOrBoolean = 'aap';

    expect(number).toBe(12);
    expect(t).toBe(true);
    expect(f).toBe(false);
    expect(string).toBe('aap');
  });
});
