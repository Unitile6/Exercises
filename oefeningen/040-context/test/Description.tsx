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
        Samen met een collega ben je bezig met het maken van een componenten
        library voor een project. Deze library moet een dark mode en een light
        mode hebben, de eindgebruiker moet zelf kunnen wisselen van thema.
      </p>

      <p>
        Je collega is nog niet zo bekend met React dus jij legt het concept{' '}
        <code>Context</code> uit. Jullie besluiten dat jij de context gaat
        aanmaken met de provider en dat je collega de componenten maakt.
      </p>

      <p>
        Jij gaat echter op vakantie en je collega wil graag verder werken.
        Jullie besluiten een hook te maken genaamd <code>useTheme</code>. Deze
        hook returned voor nu een <code>string</code> die je collega tijdens het
        ontwikkelen handmatig aanpast. Je collega kan die hook vervolgens
        gebruiken terwijl jij op vakantie bent.
      </p>

      <p>
        Eenmaal terug van vakantie is het aan jouw de schone taak om te zorgen
        dat <code>useTheme</code> daadwerkelijk gebruik maakt van een{' '}
        <code>Context</code>. Ook moet je een toggle button maken om van context
        te wisselen.
      </p>

      <p>Uiteindelijk moet je dus:</p>

      <p>
        1. Een <code>Context</code> aanmaken via <code>createContext</code> van
        het type <code>Theme</code>.
      </p>

      <p>
        2. Een <code>Provider</code> toevoegen aan <code>Example</code> die de{' '}
        <code>value</code> bevat van de <code>Context</code>.
      </p>

      <p>
        3. In <code>Example</code>: een <code>ThemeButton</code> die op{' '}
        <code>onClick</code> de theme omzet. Van <code>"light"</code> naar{' '}
        <code>"dark"</code> en weer terug. Deze button pas dus feitelijk de{' '}
        <code>value</code> van de <code>Provider</code> aan.
      </p>

      <p>
        4. De <code>useTheme</code> function zo omschrijven dat hij gebruikt
        maakt van de context die je hebt aanmaakt.
      </p>
    </Exercise>
  );
}
