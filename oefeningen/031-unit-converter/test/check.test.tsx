import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UnitConverter } from '../Oefening';

describe('031-unit-converter', () => {
  it('should select 1 km and 1000 m by default', () => {
    const {container} = render(<UnitConverter />);

    const inputs = container.querySelectorAll('input');

    expect(inputs.length).toBe(2);
    expect(inputs[0].value).toBe('1');
    expect(inputs[1].value).toBe('1000');

    const selects = container.querySelectorAll('select');

    expect(selects.length).toBe(2);
    expect(selects[0].value).toBe('km');
    expect(selects[1].value).toBe('m');
  })

  it('should when the first input is changed change the value of the second input', async () => {
    expect.assertions(5);

    render(<UnitConverter />);

    const {container} = render(<UnitConverter />);

    const inputs = container.querySelectorAll('input');

    await userEvent.clear(inputs[0])
    await userEvent.type(inputs[0], "5");

    expect(inputs[0].value).toBe('5');
    expect(inputs[1].value).toBe('5000');

    // Should not have changed
    const selects = container.querySelectorAll('select');

    expect(selects.length).toBe(2);
    expect(selects[0].value).toBe('km');
    expect(selects[1].value).toBe('m');
  });

  it('should when the second input is changed change the value of the first input', async () => {
    expect.assertions(5);

    render(<UnitConverter />);

    const {container} = render(<UnitConverter />);

    const inputs = container.querySelectorAll('input');

    await userEvent.clear(inputs[1])
    await userEvent.type(inputs[1], "5000");

    expect(inputs[0].value).toBe('5');
    expect(inputs[1].value).toBe('5000');

    // Should not have changed
    const selects = container.querySelectorAll('select');

    expect(selects.length).toBe(2);
    expect(selects[0].value).toBe('km');
    expect(selects[1].value).toBe('m');
  });

  it('should when the first unit is changed change the value of the first input', async () => {
    expect.assertions(5);

    render(<UnitConverter />);

    const {container} = render(<UnitConverter />);

    const selects = container.querySelectorAll('select');
    const inputs = container.querySelectorAll('input');

    await userEvent.selectOptions(selects[1], 'hm')

    expect(inputs[0].value).toBe('1');
    expect(inputs[1].value).toBe('10');

    expect(selects.length).toBe(2);
    expect(selects[0].value).toBe('km');
    expect(selects[1].value).toBe('hm');
  });

  it('should when the second unit is changed change the value of the second input', async () => {
    expect.assertions(5);

    render(<UnitConverter />);

    const {container} = render(<UnitConverter />);

    const selects = container.querySelectorAll('select');
    const inputs = container.querySelectorAll('input');

    await userEvent.selectOptions(selects[0], 'dam')

    expect(inputs[0].value).toBe('100');
    expect(inputs[1].value).toBe('1000');

    expect(selects.length).toBe(2);
    expect(selects[0].value).toBe('dam');
    expect(selects[1].value).toBe('m');
  });
});
