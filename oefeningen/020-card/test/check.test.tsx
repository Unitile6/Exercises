import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Oefening';

describe('020-card', () => {
  it('should know how to render the bulbasaur card', () => {
    render(
      <Card title="Bulbasaur">
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
  });
});
