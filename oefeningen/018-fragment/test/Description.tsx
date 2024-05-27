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
      flexColumn
    >
      <p>
        In de <code>Oefening.tsx</code> vind je twee zinnen omringt door een{' '}
        <code>div</code> haal deze div weg, en vervang de <code>div</code> met
        een fragment.
      </p>
    </Exercise>
  );
}
