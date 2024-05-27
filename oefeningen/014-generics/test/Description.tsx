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
        Maak een generic type genaamd <code>Data</code> en pas deze toe op de
        variabelen <code>a</code>,<code>b</code>, en <code>c</code>. Vergeet
        niet de <code>Data</code> te exporteren!
      </p>
    </Exercise>
  );
}
