import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Oefening';

describe('029-counter', () => {
  it('should initialize with 0 by default', () => {
    render(<Counter />);

    expect(screen.getByText(0)).toBeDefined();
  });

  it('should when an initialValue is provided initialize with that value', () => {
    render(<Counter initialValue={42}/>);

    expect(screen.getByText(42)).toBeDefined();
  });

  it('should when the plus button is clicked increase the count by one', async () => {
    expect.assertions(1);

    render(<Counter initialValue={42}/>);

    await userEvent.click(screen.getByText('+'));

    expect(screen.getByText(43)).toBeDefined();
  });

  it('should when the plus button is clicked, and the shift button pressed, increase the count by 10', async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(<Counter initialValue={42}/>);

    await user.keyboard("[ShiftLeft>]");
    await user.click(screen.getByText('+'));

    expect(screen.getByText(52)).toBeDefined();
  });

  it('should when the min button is clicked decrease the count by one', async () => {
    expect.assertions(1);

    render(<Counter initialValue={42}/>);

    await userEvent.click(screen.getByText('-'));

    expect(screen.getByText(41)).toBeDefined();
  });

  it('should when the min button is clicked, and the shift button pressed, decrease the count by 10', async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    render(<Counter initialValue={42}/>);

    await user.keyboard("[ShiftLeft>]");
    await user.click(screen.getByText('-'));

    expect(screen.getByText(32)).toBeDefined();
  });
});
