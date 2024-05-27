import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grade } from '../Oefening';

describe('022-report-card', () => {
  it('should know how to render a failed grade', () => {
    render(
      <Grade
        name='English'
        grade={4}
      />
    );

    expect(screen.getByText(/English/)).toBeDefined();
    expect(screen.getByText(/failed/)).toBeDefined();
    expect(screen.getByText(/4/)).toBeDefined();
  });

  it('should know how to render a barely failed grade', () => {
    render(
      <Grade
        name='English'
        grade={5}
      />
    );

    expect(screen.getByText(/English/)).toBeDefined();
    expect(screen.getByText(/failed/)).toBeDefined();
    expect(screen.getByText(/5/)).toBeDefined();
  });

  it('should know how to render a barely passed grade', () => {
    render(
      <Grade
        name='English'
        grade={6}
      />
    );

    expect(screen.getByText(/English/)).toBeDefined();
    expect(screen.getByText(/passed/)).toBeDefined();
    expect(screen.getByText(/6/)).toBeDefined();
  });

  it('should know how to render a passed grade', () => {
    render(
      <Grade
        name='English'
        grade={7}
      />
    );

    expect(screen.getByText(/English/)).toBeDefined();
    expect(screen.getByText(/passed/)).toBeDefined();
    expect(screen.getByText(/7/)).toBeDefined();
  });
});
