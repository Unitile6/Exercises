import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';

describe('037-autofocus', () => {
  it('should focus the input', () => {
   render(<Oefening />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDefined();
    expect(document.activeElement).toBe(input);
  });
});
