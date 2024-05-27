import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { WindowSize } from '../Oefening';

describe('034-window-size', () => {
  it('should show the initial width and height correctly.', () => {
    render(<WindowSize />);

    expect(screen.getByText("1024px x 768px")).toBeDefined();
  });

  it('should update the width and height when user resizes', () => {
    render(<WindowSize />);

    act(() => {
      const resizeEvent = new Event('resize');

      window.innerWidth = 1000;
      window.innerHeight = 200;
      window.dispatchEvent(resizeEvent);
    });

    expect(screen.getByText("1000px x 200px")).toBeDefined();

    act(() => {
      const resizeEvent = new Event('resize');

      window.innerWidth = 60;
      window.innerHeight = 50;
      window.dispatchEvent(resizeEvent);
    });

    expect(screen.getByText("60px x 50px")).toBeDefined();
  });
});
