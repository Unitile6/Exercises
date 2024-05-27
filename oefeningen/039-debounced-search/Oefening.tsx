import { ChangeEvent, useState } from 'react';

export function Oefening() {
  const [name, setName] = useState('');

  return (
    <div className="grid gap-4">
      {/* Pas alleen de "value" property naam aan */}
      <SearchInput value={name} onChange={setName} />
      You searched for {name}
    </div>
  );
}

type Props = {
  value: string;
  onChange(value: string): void;
};

function SearchInput(props: Props) {
  const { value, onChange } = props;

  function inputChanged(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <input
      className="w-full border p-2 mb-4"
      value={value}
      onChange={inputChanged}
      type="search"
    />
  );
}
