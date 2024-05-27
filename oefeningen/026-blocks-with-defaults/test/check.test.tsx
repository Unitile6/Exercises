import React from 'react';
import { render, screen } from '@testing-library/react';
import { Block } from '../Oefening';

describe('026-blocks-with-defaults', () => {
  it('should know how to render the dutch flag', () => {
    const { container } = render(
      <>
        <Block color="red" width={200} height={10} />
        <Block color="white" width={300} height={20} />
        <Block color="blue" width={400} height={30} />
      </>
    );

    const divs = container.querySelectorAll('div');

    expect(divs.length).toBe(3);

    const [red, white, blue] = divs;

    expect(red.style.height).toBe('10px');
    expect(white.style.height).toBe('20px');
    expect(blue.style.height).toBe('30px');

    expect(red.style.width).toBe('200px');
    expect(white.style.width).toBe('300px');
    expect(blue.style.width).toBe('400px');

    expect(red.style.backgroundColor).toBe('red');
    expect(white.style.backgroundColor).toBe('white');
    expect(blue.style.backgroundColor).toBe('blue');
  });

  it('should know how to render the dutch flag with default values', () => {
    const { container } = render(
      <>
        <Block color="red" />
        <Block color="white" />
        <Block color="blue" />
      </>
    );

    const divs = container.querySelectorAll('div');

    expect(divs.length).toBe(3);

    const [red, white, blue] = divs;

    expect(red.style.height).toBe('50px');
    expect(white.style.height).toBe('50px');
    expect(blue.style.height).toBe('50px');

    expect(red.style.width).toBe('200px');
    expect(white.style.width).toBe('200px');
    expect(blue.style.width).toBe('200px');

    expect(red.style.backgroundColor).toBe('red');
    expect(white.style.backgroundColor).toBe('white');
    expect(blue.style.backgroundColor).toBe('blue');
  });
});
