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
        Maak een component genaamd <code>Greeter</code>, en exporteer deze, zorg
        dat hij de volgende props accepteerd:
      </p>

      <p>
        1. Een prop genaamd <code>name</code> een <code>string</code>.
      </p>

      <p>
        2. Een prop genaamd <code>age</code> een <code>number</code>.
      </p>

      <p>
        Zorg dat het component <code>Greeter</code> dan de volgende zin
        teruggeeft, gegeven de <code>name</code> "Maarten" en de{' '}
        <code>age</code> 33:
      </p>

      <p>Dus als je zou gebruiken:</p>

      <p>
        <code>{`<Greeter name="Maarten" age={33} />`}</code>
      </p>

      <p>Dan zou je zien:</p>

      <p>
        <b>Hi Maarten your age is 33 years old</b>
      </p>

      <p>
        Zou je <code>Greeter</code> dus aanroepen met:
      </p>

      <p>
        <code>{`<Greeter name="Sinterklaas" age={500} />`}</code>
      </p>

      <p>Dan zie je:</p>

      <p>
        <b>Hi Sinterklaas your age is 500 years old</b>
      </p>
    </Exercise>
  );
}
