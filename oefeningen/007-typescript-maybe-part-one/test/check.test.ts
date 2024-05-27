
import { maarten, Person } from '../oefening';

describe('007-typescript-maybe-part-one', () => {
  it('should have typed "maarten" correctly', () => {
    expect.assertions(2);

    const children: Person[] | undefined = maarten.children;
    
    expect(children?.length).toBe(2);

    if (maarten.children) {
      const janeChildren: Person[] | undefined = maarten.children[0].children;
      expect(janeChildren).toBe(undefined);
    }    
  });
});
