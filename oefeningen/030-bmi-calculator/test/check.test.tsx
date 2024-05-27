import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BMICalculator } from '../Oefening';

describe('030-bmi-calculator', () => {
  it('should when the weight an height are entered calculate the BMI', async () => {
    expect.assertions(1);

    render(<BMICalculator />);

    await userEvent.type(screen.getByLabelText('Height'), '1.80');
    await userEvent.type(screen.getByLabelText('Weight'), '75');

    expect(screen.getByText('Your BMI is 23.1')).toBeDefined();
  });

  it('should height is not numeric show an error', async () => {
    expect.assertions(1);

    render(<BMICalculator />);

    await userEvent.type(screen.getByLabelText('Height'), 'aap');

    expect(screen.getByText('Please enter a number for the height.')).toBeDefined();
  });

  it('should weight is not numeric show an error', async () => {
    expect.assertions(1);

    render(<BMICalculator />);

    await userEvent.type(screen.getByLabelText('Weight'), 'aap');

    expect(screen.getByText('Please enter a number for the weight.')).toBeDefined();
  });
});
