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
        Maak voor deze opdracht een component genaamd <code>WindowSize</code>{' '}
        dit component moet de dimensies van het scherm renderen.
      </p>

      <p>
        Wanneer het venster <code>1000px</code> breed is en <code>200</code>{' '}
        hoog render dan <code>1000px x 200px</code>.
      </p>

      <p>
        Wanneer de gebruiker de browser resized dan moet de{' '}
        <code>WindowSize</code> automatisch gerendered worden, en 
        de nieuwe breedte and hoogte tonen.
      </p>

      <p>
        Zoals altijd vergeet het <code>WindowSize</code> component niet te
        exporteren.
      </p>
    </Exercise>
  );
}
