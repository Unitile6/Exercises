import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Oefening';

describe('021-complex-card', () => {
  it('should know how to render the complex bulbasaur card', () => {
    render(
      <Card
        header={<h1>Bulbasaur</h1>}
        footer={
          <div>
            <span>Grass</span>
            <span>Poison</span>
          </div>
        }
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="Bulbasaurs sprite"
        />
        <p>
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </p>
      </Card>
    );

    expect(screen.getByText(/Bulbasaur/)).toBeDefined();

    expect(
      screen.getByText(
        /There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger/
      )
    ).toBeDefined();

    expect(screen.getByAltText(/Bulbasaurs sprite/)).toBeDefined();

    expect(screen.getByText(/Poison/)).toBeDefined();

    expect(screen.getByText(/Grass/)).toBeDefined();
  });
});
