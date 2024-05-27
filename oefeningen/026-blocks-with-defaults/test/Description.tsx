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
        Laten we onze <code>Block</code> component een paar zinnige defaults
        geven.
      </p>

      <p>
        Zorg dat de prop <code>width</code> optioneel wordt, en zorgt dat hij
        standaard de waarde <code>200</code> heeft.
      </p>

      <p>
        Maak ook de prop <code>height</code> optioneel, en geeft hem als default
        waarde <code>50</code>.
      </p>
    </Exercise>
  );
}
