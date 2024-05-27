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
        Laten we een simpel (maar overbodig) <code>useEffect</code> maken die
        een via een input de <code>document.title</code> aanpast.
      </p>

      <p>
        Maak een component genaamd <code>DocumentTitle</code> en exporteer deze.
        Zet in <code>DocumentTitle</code> een een <code>input</code> element, en
        zorg dat hij met een <code>useState</code> bind.
      </p>

      <p>
        Maak een <code>useEffect</code> die wanneer de input wijzigd het{' '}
        <code>effect</code> uitvoert. Pas de <code>document title</code> aan
        naar wat er in de <code>input</code> staat.
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
