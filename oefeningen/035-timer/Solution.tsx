import { useEffect, useState } from 'react';

export function Oefening() {
  return <Timer />;
}

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  function togglePause() {
    setIsPaused(!isPaused);
  }

  return (
    <p>
      {seconds}s{' '}
      <button onClick={togglePause}>{isPaused ? 'play' : 'pause'}</button>
    </p>
  );
}
