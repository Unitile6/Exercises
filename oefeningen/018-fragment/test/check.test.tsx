import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening';

describe('018-fragment', () => {
  it('should no longer render a div but a fragment', () => {
    const {container} = render(<Oefening />);

    expect(screen.getByText(/Liesje leerde lotje lopen langs de lange lindelaan./)).toBeDefined();
    expect(screen.getByText(/De schildpad schiet schelpen uit zijn schatkist op zijn schip./)).toBeDefined();

    expect(container.querySelector('div')).toBe(null);
  });
});
