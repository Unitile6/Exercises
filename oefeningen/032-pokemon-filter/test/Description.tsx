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
      <p>Laten we de lijst van pokemon aanpassen zodat je ook kan filteren.</p>

      <p>
        Voeg een <code>input</code> toe, met als <code>placeholder</code>{' '}
        attribuut / prop de waarde <code>"Search by name"</code>. Wanneer de
        gebruiker in de <code>input</code> iets invult, filter dan de{' '}
        <code>pokemons</code> op <code>naam</code>.
      </p>

      <p>
        Voeg een <code>checkbox</code> toe, met als <code>label</code> de waarde{' '}
        <code>Show starters:</code>. Vinkt de gebruiker de checkbox aan dan
        worden alleen de <code>starter</code> pokemon getoond.
      </p>

      <p>
        Voeg een <code>select</code> toe, met als <code>label</code> de waarde{' '}
        <code>Types:</code>. Zorg dat je alle types kan selecteren uit de{' '}
        <code>types</code> array. Je kan maar één type per keer selecteren.
      </p>

      <p>
        Zet als eerste <code>option</code> in de <code>select</code> hardcoded neer:
      </p>

      <Code>{`<option value="">Geen filter</option>`}</Code>

      <p>Met deze optie hierboven bedoel je dat er <b>geen</b> filter op type is.</p>

      <p>
        Zorg dat je de verschillende filters kan <b>mixen en matchen.</b>
      </p>

      <p>
        Staan alle filters uit dan toon je <b>alle pokemon.</b>
      </p>

      <p>
        <b>Dus ook als je eerst filtered en daarna weer de filters weghaalt!</b>
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
