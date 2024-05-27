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
        Het idee van deze oefening is dat je even speelt met het typeren van de
        methodes van het object car. Misschien is het leuk om beide syntaxen een
        keer te gebruiken.{' '}
      </p>

      <p>
        Maak het type <code>Car</code> aan en zorgt dat deze klopt.
      </p>
    </Exercise>
  );
}
