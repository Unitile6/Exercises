import React from 'react';
import { render, screen } from '@testing-library/react';
import { Greeter } from '../Oefening';

describe('017-greeter', () => {
  it('should know how to greet Maarten at age 33', () => {
    render(<Greeter name="Maarten" age={33} />);

    expect(
      screen.getByText(/Hi Maarten your age is 33 years old/)
    ).toBeDefined();
  });

  it('should know how to greet Sinterklaas at age 500', () => {
    render(<Greeter name="Sinterklaas" age={500} />);

    expect(
      screen.getByText(/Hi Sinterklaas your age is 500 years old/)
    ).toBeDefined();
  });
});
