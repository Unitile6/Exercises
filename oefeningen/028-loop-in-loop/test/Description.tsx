import { Code, Exercise } from '../../../src/components';
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
        Laten we de vorige oefening uitbreiden, er iets iets nieuws bijgekomen:
        elke pokèmon heeft nu ook een <code>types</code> array. Dit beschrijft
        het type van de pokemon, bijvoorbeeld water of fire, of een combinatie
        daarvan.
      </p>

      <p>
        Bouw je vorige oplossing uit en render naast de naam ook het alles types
        van de pokèmon.
      </p>

      <p>
        Styling is optioneel maar je kan de <code>Oefening.css</code> aanpassen
        om het geheel wat leuker te maken. Je hebt ook beschikking tot{' '}
        <a
          href="https://tailwindcss.com/"
          className="underline text-purple-600"
          target="blank"
          rel="noopener"
        >
          tailwind
        </a>{' '}
        als je dat liever gebruikt.
      </p>

      <p>
        Je mag ook de aanroep van de <code>Oefening</code> aanpassen als je de
        namen maar rendered.
      </p>
    </Exercise>
  );
}
