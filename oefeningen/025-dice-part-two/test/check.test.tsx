import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dice } from '../Oefening';
import { readFileSync } from 'fs';

describe('025-dice-part-two', () => {
  it('should show the correct callout when side is 1', () => {
    render(<Dice side={1} />);

    expect(screen.getByText(/Lucky number one/)).toBeDefined();
  });

  it('should show the correct callout when side is 2', () => {
    render(<Dice side={2} />);

    expect(screen.getByText(/Snake eyes/)).toBeDefined();
  });

  it('should show the correct callout when side is 3', () => {
    render(<Dice side={3} />);

    expect(screen.getByText(/Third times a charm/)).toBeDefined();
  });

  it('should show the correct callout when side is 4', () => {
    render(<Dice side={4} />);

    expect(screen.getByText(/Quattro formaggi/)).toBeDefined();
  });

  it('should show the correct callout when side is 5', () => {
    render(<Dice side={5} />);

    expect(screen.getByText(/Fullhouse/)).toBeDefined();
  });

  it('should show the correct callout when side is 6', () => {
    render(<Dice side={6} />);

    expect(screen.getByText(/Watch my six/)).toBeDefined();
  });

  it('should have changed the oefening:', () => {
    let file = readFileSync(
      './oefeningen/025-dice-part-two/Oefening.tsx'
    ).toString();

    file = file.replaceAll(' ', '');
    file = file.replaceAll('\n', '');

    const line = `<h1>{callouts[side]}</h1>`;

    expect(file.includes(line)).toBe(true);
  });
});
