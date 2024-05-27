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
        Maak een functie genaamd <code>getOwnerName</code> deze accepteert één
        parameter een <code>Car</code> en returned de <code>name</code> van de{' '}
        <code>owner</code>. Er is natuurlijk een catch: de owner is{' '}
        <code>maybe / optional</code>, wanneer de owner{' '}
        <code>undefined</code> is return dan maar een lege string{' '}
        <code>""</code>.
      </p>

      <p>
        Zorg ervoor dat je de functie <b>exporteert!</b>
      </p>
    </Exercise>
  );
}
