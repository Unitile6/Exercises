import { Code, Exercise } from '../../../src/components';

type Props = {
  title: string;
  completed: boolean;
  showMenu: boolean;
  toggleMenu(): void;
};

export default function Description({
  showMenu,
  toggleMenu,
  title,
  completed,
}: Props) {
  return (
    <Exercise
      title={title}
      completed={completed}
      showMenu={showMenu}
      toggleMenu={toggleMenu}
      studentCode={
        <p>
          Dit is een TypeScript oefening zonder iets visueels je gaat hier niets
          zien.
        </p>
      }
    >
      <p>
        Je vind je een drietal objecten geschreven in JavaScript. Voeg voor elke
        variabele (<code>person</code>, <code>car</code> en <code>house</code>)
        een TypeScript type toe.
      </p>

      <p>
        Doe dit door een <code>type</code> aan te maken bijvoorbeeld:
      </p>

      
        <Code>
          {`type Car = {
  licensePlate: string;
  age: number;
  color: string;
  wheels: number;
};

export const car: Car = {
  licensePlate: "AA-12-ZZ",
  age: 13,
  color: 'red',
  wheels: 4
};`}
        </Code>
      
    </Exercise>
  );
}
