import {
  faArrowDown,
  faArrowUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

// Pas de functie "Oefening" niet aan
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
                    data-testid='trash'
                  />

                  <div className="flex flex-col gap-2">
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => api.moveUp(person)}
                      icon={faArrowUp}
                      data-testid='up'
                    />

                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => api.moveDown(person)}
                      icon={faArrowDown}
                      data-testid='down'
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
  /**
   * Adds a new item to the bottom of the list.
   */
  add(item: T): void;

  /**
   * Removes an item from the list.
   */
  remove(item: T): void;

  /**
   * Move an item up in the list, when the item is already at 
   * the top do nothing.
   */
  moveUp(item: T): void;

  /**
   * Move an item down in the list, when the item is already at 
   * the bottom do nothing.
   */
  moveDown(item: T): void;
};

type Props<T> = {
  initialItems: T[];
  children(items: T[], api: ListApi<T>): ReactNode;
};

export function List<T>({ initialItems, children }: Props<T>) {
  return <p>Maak de oefening door de List aan te passen</p>
}
