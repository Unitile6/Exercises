import { useEffect, useState } from 'react';

export function Oefening() {
  return (
    <WindowSize />
  );
}

export function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <p>
      {width}px x {height}px
    </p>
  );
}
