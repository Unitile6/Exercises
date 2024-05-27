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
        Render in het <code>Oefening</code> component een{' '}
        <code>{`<input />`}</code> element en focus deze automatisch.
      </p>

      <p className="bg-yellow-300 p-4">
        <b>LET OP:</b> de dev server kan de focus soms een beetje in de war
        gooien, en de focus niet goed triggeren. Als je na een{' '}
        <code>refresh</code> van de pagina de focus in de{' '}
        <code>{`<input />`}</code> ziet staan dan is het goed.
      </p>
    </Exercise>
  );
}
