import React from 'react';
import { render } from '@testing-library/react';
import { readFileSync } from 'fs';
import userEvent from '@testing-library/user-event';
import { DocumentTitle } from '../Oefening';

describe('033-document-title', () => {
  it('should alter the document title to whatever is in the input', async () => {
    expect.assertions(1);

    const { container } = render(<DocumentTitle />);

    const input = container.querySelector('input');

    if (input) {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello world!');
    }

    expect(document.title).toBe('Hello world!');
  });

  it('should have added a useEffect:', () => {
    const file = readFileSync('./oefeningen/033-document-title/Oefening.tsx');

    expect(file.toString().includes('useEffect')).toBe(true);
  });
});
