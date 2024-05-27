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
        Maak een component genaamd <code>Authenticated</code>. Dit component
        rendered kijkt of de gebruiker is ingelogd, zo ja dan rendered hij de{' '}
        <code>children</code>, en anders de <code>fallback.</code>
      </p>

      <p>Dit component heeft dus de volgende props:</p>

      <p>
        1. een <code>children</code> render prop. Wanneer de gebruiker is
        ingelogd, wordt <code>children</code> aangeroepen.
      </p>

      <p>
        2. een <code>fallback</code> render prop. Voor als de gebruiker niet is
        ingelogd om <b>optioneel</b> wat te tonen. Wordt de{' '}
        <code>fallback</code> niet meegeven dan rendered de{' '}
        <code>Authenticated</code> niets wanneer de gebruiker niet is ingelogd.
      </p>

      <p>
        De gebruiker is ingelogd wanneer de <code>loggedIn</code> boolean in de{' '}
        <code>Oefening.tsx</code> de waarde <code>true</code> heeft. Door deze
        boolean even te flippen naar <code>false</code> kan je testen of{' '}
        <code>Authenticated</code> goed werkt.
      </p>
    </Exercise>
  );
}
