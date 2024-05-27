import { Exercise } from '../../../src/components';
import { Oefening } from '../Oefening';
import { Oefening as Solution } from '../Solution';

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
      studentCode={<Oefening />}
      solutionCode={<Solution />}
    >
      <p>
        Maak een component genaamd <code>HelloWorld</code> zorg dat hij in een{' '}
        <code>h1</code> de tekst <code>"Hello world!"</code> toont.
      </p>

      <p>
        Exporteer de <code>HelloWorld</code> function ook!
      </p>
    </Exercise>
  );
}
