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
        We hebben een component genaamd <code>Dice</code>, deze heeft één prop
        genaamd <code>side</code>. Wanneer de dobbelsteen op een kant valt dan
        zie je een callout.
      </p>

      <p>
        Het component <code>Dice</code> heeft een grote switch in zich,
        verplaats deze switch naar een helper function genaamd{' '}
        <code>diceCallout</code>.
      </p>

      <p>
        Uiteindelijk wil je dat <code>Dice</code> er zo uit ziet:
      </p>

      <Code>
        {`
export function Dice({ side }: Props) {
  return <h1>{diceCallout(side)}</h1>;
}
        `}
      </Code>

      <p>
        Het idee is niet dat dit een geweldige verbetering is maar, laat zien
        dat er vaak meerdere manieren zijn om een probleem op te lossen.
      </p>
    </Exercise>
  );
}
