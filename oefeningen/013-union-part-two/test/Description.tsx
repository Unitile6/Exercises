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
        Maak en exporteer een <code>union</code> genaamd{' '}
        <code>NumberOrBoolean</code> zorg dat deze alle numbers en alle booleans
        accepteerd.
      </p>
    </Exercise>
  );
}
