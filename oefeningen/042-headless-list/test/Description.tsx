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
      <p>Welkom bij de laatste oefening!</p>

      <p>
        Zorg dat je het component <code>List</code> invulling geeft en dat hij
        werkt volgens de props.
      </p>

      <p className="bg-yellow-300 p-4">
        <b>Let op:</b> dit is natuurlijk de laatste oefening en daarom
        is hij erg moeilijk!
      </p>
    </Exercise>
  );
}
