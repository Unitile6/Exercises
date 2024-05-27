import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';

describe('028-loop-in-loop', () => {
  it('should know to render the list of pokemon and types, and not have key warnings', () => {
    const errors: string[] = [];

    jest.spyOn(console, 'error').mockImplementation((msg) => {
      errors.push(msg);
    });

    render(<Oefening />);

    expect(screen.getByText(/bulbasaur/)).toBeDefined();
    expect(screen.getByText(/ivysaur/)).toBeDefined();
    expect(screen.getByText(/venusaur/)).toBeDefined();

    expect(screen.queryAllByText(/grass/).length).toBe(3);
    expect(screen.queryAllByText(/poison/).length).toBe(3);

    expect(screen.getByText(/charmander/)).toBeDefined();
    expect(screen.getByText(/charmeleon/)).toBeDefined();
    expect(screen.getByText(/charizard/)).toBeDefined();

    expect(screen.queryAllByText(/flying/).length).toBe(1);
    expect(screen.queryAllByText(/fire/).length).toBe(3);

    expect(screen.getByText(/squirtle/)).toBeDefined();
    expect(screen.getByText(/wartortle/)).toBeDefined();
    expect(screen.getByText(/blastoise/)).toBeDefined();

    expect(screen.queryAllByText(/water/).length).toBe(3);

    expect(
      errors.some((error) =>
        error.includes(
          'Warning: Each child in a list should have a unique "key" prop.'
        )
      )
    ).toBe(false);
  });
});
