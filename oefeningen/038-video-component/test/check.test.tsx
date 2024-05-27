import React from 'react';
import { render, screen } from '@testing-library/react';
import { Oefening } from '../Oefening'; 
import userEvent from '@testing-library/user-event';

describe('038-video-component', () => {
  it('should render a video with a pause and play button', async () => {
    render(<Oefening />);

    const video = document.getElementsByTagName("video")[0];
    video.play = jest.fn();
    await userEvent.click(screen.getByText("Play"));
    
    expect(video.play).toBeCalledTimes(1);
    
    video.pause = jest.fn();
    await userEvent.click(screen.getByText("Pause"));

    expect(video.pause).toBeCalledTimes(1);
  });
});
