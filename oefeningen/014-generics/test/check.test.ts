
import { a, b, c, Data } from '../oefening';

describe('014-generics', () => {
  it('should typed generic type Data correctly', () => {
    const aData: Data<number> = a;
    const bData: Data<string> = b;
    const cData: Data<boolean> = c;

    expect(aData.data).toBe(0);
    expect(bData.data).toBe('brown');
    expect(cData.data).toBe(true);
  });

});
