import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';
import userEvent from '@testing-library/user-event';

describe('039-debounced-search', () => {
  it('should debounce the input', async () => {
    render(<Oefening />);

    await userEvent.type(screen.getByRole('searchbox'), 'Maarten');
    
    expect(screen.queryByText("You searched for Maarten")).toBe(null);

    setTimeout(() => {
      screen.getByText("You searched for Maarten");
    }, 500);

  });
});
