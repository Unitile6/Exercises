import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Oefening } from '../Oefening';

describe('032-pokemon-filter', () => {
  it('should render all pokemon when no filters are set', () => {
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
  });

  it('should filter on name when a query is entered', async () => {
    expect.assertions(9);
    
    render(<Oefening />);

    await userEvent.type(screen.getByPlaceholderText("Search by name"), "saur");

    expect(screen.getByText(/bulbasaur/)).toBeDefined();
    expect(screen.getByText(/ivysaur/)).toBeDefined();
    expect(screen.getByText(/venusaur/)).toBeDefined();

    expect(screen.queryByText(/charmander/)).toBe(null);
    expect(screen.queryByText(/charmeleon/)).toBe(null);
    expect(screen.queryByText(/charizard/)).toBe(null);

    expect(screen.queryByText(/squirtle/)).toBe(null);
    expect(screen.queryByText(/wartortle/)).toBe(null);
    expect(screen.queryByText(/blastoise/)).toBe(null);
  });

  it('should filter on starter pokemon when checkbox is checked', async () => {
    expect.assertions(9);
    
    render(<Oefening />);

    await userEvent.click(screen.getByLabelText("Show starters:"));

    expect(screen.getByText(/bulbasaur/)).toBeDefined();
    expect(screen.getByText(/charmander/)).toBeDefined()
    expect(screen.getByText(/squirtle/)).toBeDefined();

    expect(screen.queryByText(/ivysaur/)).toBe(null);
    expect(screen.queryByText(/venusaur/)).toBe(null);

    expect(screen.queryByText(/charmeleon/)).toBe(null);
    expect(screen.queryByText(/charizard/)).toBe(null);

    expect(screen.queryByText(/wartortle/)).toBe(null);
    expect(screen.queryByText(/blastoise/)).toBe(null);
  });

  it('should filter on types when types are selected', async () => {
    expect.assertions(9);
    
    render(<Oefening />);

    await userEvent.selectOptions(screen.getByLabelText("Types:"), "fire");

    expect(screen.queryByText(/bulbasaur/)).toBe(null);
    expect(screen.queryByText(/ivysaur/)).toBe(null);
    expect(screen.queryByText(/venusaur/)).toBe(null);

    expect(screen.getByText(/charmander/)).toBeDefined()
    expect(screen.getByText(/charmeleon/)).toBeDefined()
    expect(screen.getByText(/charizard/)).toBeDefined()

    expect(screen.queryByText(/squirtle/)).toBe(null);
    expect(screen.queryByText(/wartortle/)).toBe(null);
    expect(screen.queryByText(/blastoise/)).toBe(null);
  });

  it('should be able to mix filters', async () => {
    expect.assertions(9);
    
    render(<Oefening />);

    // Only charmander
    await userEvent.type(screen.getByPlaceholderText("Search by name"), "Char");
    await userEvent.click(screen.getByLabelText("Show starters:"));
    await userEvent.selectOptions(screen.getByLabelText("Types:"), "fire");
    
    expect(screen.getByText(/charmander/)).toBeDefined()

    expect(screen.queryByText(/bulbasaur/)).toBe(null);
    expect(screen.queryByText(/ivysaur/)).toBe(null);
    expect(screen.queryByText(/venusaur/)).toBe(null);

    expect(screen.queryByText(/charmeleon/)).toBe(null);
    expect(screen.queryByText(/charizard/)).toBe(null);

    expect(screen.queryByText(/squirtle/)).toBe(null);
    expect(screen.queryByText(/wartortle/)).toBe(null);
    expect(screen.queryByText(/blastoise/)).toBe(null);
  });

  it('should show all pokemon again when filters are cleared', async () => {
    expect.assertions(18);
    
    render(<Oefening />);

    // Only charmander
    await userEvent.type(screen.getByPlaceholderText("Search by name"), "Char");
    await userEvent.type(screen.getByLabelText("Show starters:"), "saur");
    await userEvent.selectOptions(screen.getByLabelText("Types:"), "fire");
    
    expect(screen.getByText(/charmander/)).toBeDefined()

    expect(screen.queryByText(/bulbasaur/)).toBe(null);
    expect(screen.queryByText(/ivysaur/)).toBe(null);
    expect(screen.queryByText(/venusaur/)).toBe(null);

    expect(screen.queryByText(/charmeleon/)).toBe(null);
    expect(screen.queryByText(/charizard/)).toBe(null);

    expect(screen.queryByText(/squirtle/)).toBe(null);
    expect(screen.queryByText(/wartortle/)).toBe(null);
    expect(screen.queryByText(/blastoise/)).toBe(null);

    await userEvent.clear(screen.getByPlaceholderText("Search by name"));
    await userEvent.click(screen.getByLabelText("Show starters:"));
    await userEvent.selectOptions(screen.getByLabelText("Types:"), "Geen filter");
    
    expect(screen.getByText(/bulbasaur/)).toBeDefined();
    expect(screen.getByText(/ivysaur/)).toBeDefined();
    expect(screen.getByText(/venusaur/)).toBeDefined();

    expect(screen.getByText(/charmander/)).toBeDefined();
    expect(screen.getByText(/charmeleon/)).toBeDefined();
    expect(screen.getByText(/charizard/)).toBeDefined();

    expect(screen.getByText(/squirtle/)).toBeDefined();
    expect(screen.getByText(/wartortle/)).toBeDefined();
    expect(screen.getByText(/blastoise/)).toBeDefined();
  });
});
