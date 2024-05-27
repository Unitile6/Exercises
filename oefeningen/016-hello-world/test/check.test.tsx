import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from '../Oefening';

describe('016-hello-world', () => {
  it('should know how to greet Maarten at age 33', () => {
    render(<HelloWorld />);

    expect(
      screen.getByText(/Hello world!/)
    ).toBeDefined();
  });
});
