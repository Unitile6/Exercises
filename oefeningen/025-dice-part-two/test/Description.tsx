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
        Laten we nog een andere versie van het <code>Dice</code> component
        maken. Deze keer niet met een helper function, maar met een configuratie
        object.
      </p>

      <p>
        Maak een object genaamd <code>callouts</code> met daarin zes key / value
        pairs, waar elke key het getal is en de value de callout.
      </p>

      <p>
        Bijvoorbeeld <code>{`{ 1: "Lucky number one" }`}</code>
      </p>

      <p>
        Uiteindelijk wil je dat <code>Dice</code> er zo uit ziet:
      </p>

      <Code>
        {`
export function Dice({ side }: Props) {
  return <h1>{callouts[side]}</h1>;
}
        `}
      </Code>

      <p>
        Wederom is het idee is niet dat dit een geweldige verbetering is maar
        een alternatief.
      </p>
    </Exercise>
  );
}
