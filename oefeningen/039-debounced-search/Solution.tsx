import { ChangeEvent, useRef, useState } from 'react';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  const [name, setName] = useState('');

  return (
    <div className="grid gap-4">
      <SearchInput defaultValue={name} onChange={setName} />
      You searched for {name}
    </div>
  );
}

type Props = {
  defaultValue: string;
  onChange(value: string): void;
};

function SearchInput(props: Props) {
  const { defaultValue, onChange } = props;

  const timeoutId = useRef(-1);

  function inputChanged(event: ChangeEvent<HTMLInputElement>) {
    window.clearTimeout(timeoutId.current);

    timeoutId.current = window.setTimeout(() => {
      onChange(event.target.value);
    }, 500);
  }

  return (
    <input
      className="w-full border p-2 mb-4"
      defaultValue={defaultValue}
      onChange={inputChanged}
      type="search"
    />
  );
}
