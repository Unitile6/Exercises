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
        Maak een <code>Counter</code> component, een counter is een button
        links, een getal in het midden, en een button rechts.
      </p>

      <p>
        De linker <code>button</code> geef je als tekst <code>-</code> mee,
        wanneer je daar op klikt dan moet het getal met{' '}
        <strong>1 omlaag.</strong>
      </p>

      <p>
        De rechter <code>button</code> geef je als tekst <code>+</code> mee,
        wanneer je daar op klikt dan moet het getal met{' '}
        <strong>1 omhoog.</strong>
      </p>

      <p>
        Wanneer je de <code>shift toets</code> hebt ingedrukt dan moet het
        getal met <strong>10 omhoog of omlaag</strong>.
      </p>

      <p>
        Je hebt voor deze oefening dus een <code>useState</code> nodig, om dat
        getal in op te slaan.
      </p>

      <p>
        Optioneel accepteert de <code>Counter</code> een prop genaamd{' '}
        <code>initialValue</code>, dit moet dan dienen als de begin waarde van
        de <code>useState</code>. Geef je geen <code>initialValue</code> mee
        dan start de <code>useState</code> dan met <code>0</code>.
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
