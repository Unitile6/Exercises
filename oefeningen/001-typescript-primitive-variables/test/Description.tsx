import { Exercise } from '../../../src/components';

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
        Hier onder vind je een aantal variabelen geschreven in JavaScript. Voeg
        voor elke variabele (a tot en met g) een TypeScript type toe.
      </p>

      <p>Bijvoorbeeld:</p>
      <p><code>export const a = 10</code></p>
      <p>Moet worden:</p>
      <p><code>export const a: number = 10;</code></p>
    </Exercise>
  );
}
