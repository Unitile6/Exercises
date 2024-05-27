import React from 'react';
import { render, screen } from '@testing-library/react';
import { Authenticated, setLoggedIn } from '../Oefening';
import '@testing-library/jest-dom'

describe('041-render-props', () => {
  it('should render children when logged in', () => {
    setLoggedIn(true);
    render(<Authenticated>{() => "logged in"}</Authenticated>)

    expect(screen.getByText("logged in")).toBeDefined();
  });

  it('should render children when logged in, fallback should not influence it.', () => {
    setLoggedIn(true);
    render(<Authenticated fallback={() => "falling back"}>{() => "logged in"}</Authenticated>)

    expect(screen.getByText("logged in")).toBeDefined();
  });

  it('should render nothing if user is not logged in and there is no fallback', () => {
    setLoggedIn(false);
    
    render(<Authenticated>{() => "logged in"}</Authenticated>)

    expect(screen.queryByText("logged in")).not.toBeInTheDocument();
  });

  it('should render fallback if user is not logged in and it is defined.', () => {
    setLoggedIn(false);
    
    render(<Authenticated fallback={() => "falling back"}>{() => "logged in"}</Authenticated>)

    expect(screen.queryByText("falling back")).toBeDefined();
  });
});
