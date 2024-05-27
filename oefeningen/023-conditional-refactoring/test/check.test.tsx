import React from 'react';
import { render, screen } from '@testing-library/react';
import { Greeter, Oefening } from '../Oefening';
import { readFileSync } from 'fs';

describe('023-conditional-refactoring', () => {
  it('should know how to greet Maarten at age 33', () => {
    render(<Greeter name="Maarten" age={33} />);

    expect(
      screen.getByText(/Hi Maarten your age is 33 years old and you are alive/)
    ).toBeDefined();
  });

  it('oefening should not render plato', () => {
    render(<Oefening />);

    expect(
      screen.queryByText(/Hi Plato your age is 66 years old and you are alive/)
    ).toBeNull();
  });

  it('oefening should not render plato', () => {
    render(<Oefening />);

    expect(
      screen.queryByText(/Hi Plato your age is 66 years old and you are alive/)
    ).toBeNull();
  });

  it('should have changed the oefening:', () => {
    let file = readFileSync('./oefeningen/023-conditional-refactoring/Oefening.tsx').toString();

    file = file.replaceAll(' ', '');
    file = file.replaceAll('\n', '');
    
    const lines = [
      `maarten.alive?<Greeter{...maarten}/>:null`,
      `owen.alive?<Greeter{...owen}/>:null`,
      `jane.alive?<Greeter{...jane}/>:null`,
      `plato.alive?<Greeter{...plato}/>:null`,
    ];

    for (const line of lines) {
      expect(file.includes(line)).toBe(true);
    }
  });
});
