import { useEffect, useState } from 'react';

export function Oefening() {
  return (
    <DocumentTitle />
  );
}

export function DocumentTitle() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <form className="grid gap-4 p-4 border shadow mb-4">
      <div className="grid gap-1">
        <label htmlFor="title" className="font-bold">
          Document title
        </label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          id="title"
          name="title"
          className="border p-2"
        />
      </div>
    </form>
  );
}
