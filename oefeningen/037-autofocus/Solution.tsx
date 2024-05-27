import { useEffect, useRef } from "react";

export function Oefening() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input ref={inputRef} className="border p-2" />
  );
}

