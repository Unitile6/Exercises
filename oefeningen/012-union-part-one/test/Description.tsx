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
        Maak en exporteer een <code>union</code> genaamd <code>Color</code> zorg
        dat deze de strings <code>"red"</code>, <code>"white"</code> en{' '}
        <code>"blue"</code> accepteerd
      </p>
    </Exercise>
  );
}
