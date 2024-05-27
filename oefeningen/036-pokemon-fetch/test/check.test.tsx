import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';

// @ts-expect-error Allow me to do this
window.fetch = () => undefined;

describe('036-pokemon-fetch', () => {
  it('should know how to fetch and render the first 9 pokemon', async () => {
    // @ts-expect-error Allow me to mock fetch
    jest.spyOn(window, 'fetch').mockImplementation((request: any) => {
      expect(request).toBe('/api/pokemon');

      const json = () =>
        Promise.resolve({
          content: [
            {
              id: 1,
              name: 'bulbasaur',
              sprite: 'http://localhost:4000/api/public/sprites/1-front.png',
            },
            {
              id: 2,
              name: 'ivysaur',
              sprite: 'http://localhost:4000/api/public/sprites/2-front.png',
            },
            {
              id: 3,
              name: 'venusaur',
              sprite: 'http://localhost:4000/api/public/sprites/3-front.png',
            },
            {
              id: 4,
              name: 'charmander',
              sprite: 'http://localhost:4000/api/public/sprites/4-front.png',
            },
            {
              id: 5,
              name: 'charmeleon',
              sprite: 'http://localhost:4000/api/public/sprites/5-front.png',
            },
            {
              id: 6,
              name: 'charizard',
              sprite: 'http://localhost:4000/api/public/sprites/6-front.png',
            },
            {
              id: 7,
              name: 'squirtle',
              sprite: 'http://localhost:4000/api/public/sprites/7-front.png',
            },
            {
              id: 8,
              name: 'wartortle',
              sprite: 'http://localhost:4000/api/public/sprites/8-front.png',
            },
            {
              id: 9,
              name: 'blastoise',
              sprite: 'http://localhost:4000/api/public/sprites/9-front.png',
            },
            {
              id: 10,
              name: 'caterpie',
              sprite: 'http://localhost:4000/api/public/sprites/10-front.png',
            },
          ],
          last: false,
          first: true,
          totalElements: 150,
          totalPages: 15,
          size: 10,
          number: 1,
        });

      return { json };
    });

    const errors: string[] = [];

    jest.spyOn(console, 'error').mockImplementation((msg) => {
      errors.push(msg);
    });

    render(<Oefening />);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 100);
    })

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
