import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';

describe('027-pokemon-list', () => {
  it('should know to render the list of pokemon, and not have key warnings', () => {
    const errors: string[] = [];

    jest.spyOn(console, 'error').mockImplementation((msg) => {
      errors.push(msg);
    });

    render(<Oefening />);

    expect(screen.getByText(/bulbasaur/)).toBeDefined();

    expect(screen.getByText(/ivysaur/)).toBeDefined();

    expect(screen.getByText(/venusaur/)).toBeDefined();

    expect(screen.getByText(/charmander/)).toBeDefined();

    expect(screen.getByText(/charmeleon/)).toBeDefined();

    expect(screen.getByText(/charizard/)).toBeDefined();

    expect(screen.getByText(/squirtle/)).toBeDefined();

    expect(screen.getByText(/wartortle/)).toBeDefined();

    expect(screen.getByText(/blastoise/)).toBeDefined();

    expect(
      errors.some((error) =>
        error.includes(
          'Warning: Each child in a list should have a unique "key" prop.'
        )
      )
    ).toBe(false);
  });
});
