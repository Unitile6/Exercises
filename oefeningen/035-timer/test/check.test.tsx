import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Timer } from '../Oefening';

describe('035-timer', () => {
  it('should have a working timer which playing by default', () => {
    jest.useFakeTimers();

    render(<Timer />);

    expect(screen.getByText('0s')).toBeDefined();
    expect(screen.getByText('pause')).toBeDefined();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('1s')).toBeDefined();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('2s')).toBeDefined();

    act(() => {
      jest.advanceTimersByTime(8000);
    });
    expect(screen.getByText('10s')).toBeDefined();

    jest.useRealTimers();
  });

  it('should have a working pause and play button', async () => {
    expect.assertions(6);
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    jest.useFakeTimers();

    render(<Timer />);

    expect(screen.getByText('0s')).toBeDefined();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('1s')).toBeDefined();

    // When paused nothing should happen.
    await user.click(screen.getByText('pause'));
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(screen.getByText('1s')).toBeDefined();

    // Start playing
    await user.click(screen.getByText('play'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('2s')).toBeDefined();

    // Pause again
    await user.click(screen.getByText('pause'));
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(screen.getByText('2s')).toBeDefined();

    // Start playing a final time
    await user.click(screen.getByText('play'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('3s')).toBeDefined();

    jest.useRealTimers();
  });
  //   // TODO one day use fake timers cannot get it to work.
  //   expect.assertions(10);

  //   render(<Timer />);

  //   expect(screen.getByText('0s')).toBeDefined();
  //   expect(screen.getByText('pause')).toBeDefined();

  //   await userEvent.click(screen.getByText('pause'));
  //   expect(screen.getByText('play')).toBeDefined();

  //   // Should stay at 0.
  //   await new Promise((r) => setTimeout(r, 1000));
  //   expect(screen.getByText('0s')).toBeDefined();

  //   // Play again
  //   await userEvent.click(screen.getByText('play'));
  //   expect(screen.getByText('pause')).toBeDefined();

  //   await act(async () => {
  //     await new Promise((r) => setTimeout(r, 1000));
  //   });
  //   expect(screen.getByText('1s')).toBeDefined();

  //   // Pause once more
  //   await userEvent.click(screen.getByText('pause'));
  //   expect(screen.getByText('play')).toBeDefined();

  //   await act(async () => {
  //     await new Promise((r) => setTimeout(r, 1000));
  //   });

  //   expect(screen.getByText('1s')).toBeDefined();

  //   // Play last time
  //   await userEvent.click(screen.getByText('play'));
  //   expect(screen.getByText('pause')).toBeDefined();

  //   await act(async () => {
  //     await new Promise((r) => setTimeout(r, 1000));
  //   });
  //   expect(screen.getByText('2s')).toBeDefined();
  // });
});
