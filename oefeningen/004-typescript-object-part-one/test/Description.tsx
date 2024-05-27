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
        In deze oefening wil ik dat je het inline type declaratie voor de
        variable <code>country</code> in een eigen type zet via het <code>type</code> keyword, noem
        het nieuwe type <code>Country</code>.
      </p>
    </Exercise>
  );
}
