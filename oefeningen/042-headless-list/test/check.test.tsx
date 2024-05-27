import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';
import userEvent from '@testing-library/user-event';

describe('042-headless-list', () => {
  it('should render the people in the list', () => {
    render(<Oefening />);

    expect(screen.getByText('Maarten')).toBeDefined();
    expect(screen.getByText('Tosca')).toBeDefined();
    expect(screen.getByText('Owen')).toBeDefined();
    expect(screen.getByText('Jane')).toBeDefined();
  });

  it('should when add button is clicked add a person', async () => {
    expect.assertions(5);

    render(<Oefening />);

    await userEvent.click(screen.getByText('Add person'));

    expect(screen.getByText('Maarten')).toBeDefined();
    expect(screen.getByText('Tosca')).toBeDefined();
    expect(screen.getByText('Owen')).toBeDefined();
    expect(screen.getByText('Jane')).toBeDefined();

    expect(screen.getByText('Person4')).toBeDefined();
  });

  it('should delete person when delete button is clicked', async () => {
    expect.assertions(1);

    render(<Oefening />);

    const [maarten] = screen.getAllByTestId('trash');

    await userEvent.click(maarten);

    expect(screen.queryByText('Maarten')).toBe(null);
  });

  it('should move person up when clicked', async () => {
    expect.assertions(4);

    render(<Oefening />);

    const [maarten1, tosca1, owen1, jane1] = screen.getAllByTestId('up');

    await userEvent.click(tosca1);

    const [tosca2, maarten2, owen2, jane2] = screen.getAllByTestId('up');

    expect(maarten1).toBe(maarten2);
    expect(tosca1).toBe(tosca2);
    expect(owen1).toBe(owen2);
    expect(jane1).toBe(jane2);
  });

  it('should move person down when clicked', async () => {
    expect.assertions(4);

    render(<Oefening />);

    const [maarten1, tosca1, owen1, jane1] = screen.getAllByTestId('down');

    await userEvent.click(maarten1);

    const [tosca2, maarten2, owen2, jane2] = screen.getAllByTestId('down');

    expect(maarten1).toBe(maarten2);
    expect(tosca1).toBe(tosca2);
    expect(owen1).toBe(owen2);
    expect(jane1).toBe(jane2);
  });

  it('should ignore moving first person up', async () => {
    expect.assertions(4);

    render(<Oefening />);

    const [maarten1, tosca1, owen1, jane1] = screen.getAllByTestId('up');

    await userEvent.click(maarten1);

    const [maarten2, tosca2, owen2, jane2] = screen.getAllByTestId('up');

    expect(maarten1).toBe(maarten2);
    expect(tosca1).toBe(tosca2);
    expect(owen1).toBe(owen2);
    expect(jane1).toBe(jane2);
  });

  it('should ignore moving last person down', async () => {
    expect.assertions(4);

    render(<Oefening />);

    const [maarten1, tosca1, owen1, jane1] = screen.getAllByTestId('down');

    await userEvent.click(jane1);

    const [maarten2, tosca2, owen2, jane2] = screen.getAllByTestId('down');

    expect(maarten1).toBe(maarten2);
    expect(tosca1).toBe(tosca2);
    expect(owen1).toBe(owen2);
    expect(jane1).toBe(jane2);
  });
});
