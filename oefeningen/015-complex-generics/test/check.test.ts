
import { every } from '../oefening';

describe('015-complex-generics', () => {
  it('should typed generic function every correctly 1', () => {
    const coll: number[] = [2, 4, 6, 8];
    const fn: (item: number, index: number) => boolean = (n) => n % 2 === 0;

    const result: boolean = every(coll, fn);
    expect(result).toBe(true);
  });

  it('should typed generic function every correctly 2', () => {
    const coll: string[] = ['Ans', 'Aaron', 'Anton', 'Anne'];
    const fn: (item: string, index: number) => boolean = (name) =>
      name[0] === 'A';

    const result: boolean = every(coll, fn);
    expect(result).toBe(true);
  });

});
