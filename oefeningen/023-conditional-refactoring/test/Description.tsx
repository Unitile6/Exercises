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
        In de Oefening.tsx vind je een <code>Greeter</code> component met een
        eigenaardigheid: hij rendert wel of niet op basis van de{' '}
        <code>isAlive</code> property.
      </p>

      <p>
        Refactor de code zo dat <code>Greeter</code> geen prop{' '}
        <code>alive</code>
        meer heeft.
      </p>

      <p>
        Deze code dus in <code>Greeter</code> moet dus ook weg:
      </p>

      <Code>
        {`
if (!alive) {
  return null;
}
        `}
      </Code>

      <p>
        Zorg er wel voor dat dode personen niet in de lijst staat, je zult dus
        een conditional render moeten toevoegen in het <code>Oefening</code>
        component, voor elke persoon!
      </p>

      <p>
        Op deze manier is het component <code>Greeter</code> niet meer
        verantwoordelijk voor het wel of niet tonen van personen.
      </p>
    </Exercise>
  );
}
