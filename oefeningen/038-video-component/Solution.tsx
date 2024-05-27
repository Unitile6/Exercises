import { useRef, useState } from 'react';

import './Oefening.css';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <VideoPlayer />;
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoEl = useRef<HTMLVideoElement | null>(null);

  function playClicked() {
    if (isPlaying) {
      videoEl.current?.pause();
      setIsPlaying(false);
    } else {
      videoEl.current?.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="mb-4">
      <video ref={videoEl} src="/videos/bunny.mp4" className="mb-4 max-w-md" />

      <div className="flex gap-4">
        <button className='bg-purple-600 p-4 text-white' onClick={playClicked}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
}
