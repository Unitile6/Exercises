import {
  faArrowDown,
  faArrowUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ReactNode } from 'react';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  const persons = [
    { id: 1, name: 'Maarten' },
    { id: 2, name: 'Tosca' },
    { id: 3, name: 'Owen' },
    { id: 4, name: 'Jane' },
  ];

  return (
    <List<Person> initialItems={persons}>
      {(persons, api) => (
        <div className="grid gap-4 border p-4 shadow-xl max-w-lg w-full">
          <ul className="grid gap-4">
            {persons.map((person) => (
              <li
                key={person.id}
                className="flex justify-between items-center gap-4 pb-4 border-b-2"
              >
                <div className="flex gap-4 items-center">
                  <div className="border rounded-full p-4 w-12 h-12 flex justify-center items-center">
                    {person.name.at(0)}
                  </div>
                  <b>{person.name}</b>
                </div>

                <div className="flex items-center gap-8">
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    onClick={() => api.remove(person)}
                    icon={faTrash}
                  />

                  <div className="flex flex-col gap-2">
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => api.moveUp(person)}
                      icon={faArrowUp}
                    />

                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => api.moveDown(person)}
                      icon={faArrowDown}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="w-full border bg-black p-4 text-white"
            onClick={() =>
              api.add({
                id: Math.random(),
                name: 'Person' + persons.length,
              })
            }
          >
            Add person
          </button>
        </div>
      )}
    </List>
  );
}

type Person = {
  id: number;
  name: string;
};

export type ListApi<T> = {
  add(item: T): void;
  remove(item: T): void;
  moveUp(item: T): void;
  moveDown(item: T): void;
};

type Props<T> = {
  initialItems: T[];
  children(items: T[], api: ListApi<T>): ReactNode;
};

export function List<T>({ initialItems, children }: Props<T>) {
  const [items, setItems] = useState(() => [...initialItems]);

  const api: ListApi<T> = {
    add(item: T) {
      setItems([...items, item]);
    },

    remove(item: T) {
      const newItems = items.filter((i) => i !== item);
      setItems(newItems);
    },

    moveUp(item: T) {
      const index = items.indexOf(item);

      if (index === 0) {
        return;
      }

      if (index !== -1) {
        items.splice(index, 1);
        items.splice(index - 1, 0, item);

        setItems([...items]);
      }
    },

    moveDown(item: T) {
      const index = items.indexOf(item);

      if (index === items.length - 1) {
        return;
      }

      if (index !== -1) {
        items.splice(index, 1);
        items.splice(index + 1, 0, item);

        setItems([...items]);
      }
    },
  };

  return <>{children(items, api)}</>;
}
