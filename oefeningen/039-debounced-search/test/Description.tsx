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
        In de <code>Oefening.tsx</code> vind je een component genaamd{' '}
        <code>SearchInput</code>, gemaakt door een andere developer.
      </p>

      <p>
        Nu krijg jij de taak om dit <code>SearchInput</code> component debounced
        te maken, zodat hij niet de server bombardeerd op elke keystroke.
      </p>

      <p>
        Na <code>500</code> milliseconde inactiviteit moet de{' '}
        <code>onChange</code> pas aangeroepen worden.
      </p>

      <p>
        Tip: het component moet nu dus ook van <code>controlled</code> naar{' '}
        <code>uncontrolled</code> gaan Dus de prop <code>value</code> van de{' '}
        <code>SearchInput</code>moet je veranderen naar ???
      </p>
    </Exercise>
  );
}
