import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';
import userEvent from '@testing-library/user-event';

describe('040-context', () => {
  it('should render a dark mode toggle which works', async () => {
    expect.assertions(6);

    render(<Oefening />)

    const card = screen.getByTestId('card');

    expect(card.classList.contains('text-white')).toBe(false);
    expect(card.classList.contains('text-black')).toBe(true);

    await userEvent.click(screen.getByRole("button"));

    expect(card.classList.contains('text-white')).toBe(true);
    expect(card.classList.contains('text-black')).toBe(false);

    await userEvent.click(screen.getByRole("button"));

    expect(card.classList.contains('text-white')).toBe(false);
    expect(card.classList.contains('text-black')).toBe(true);
  });

});
