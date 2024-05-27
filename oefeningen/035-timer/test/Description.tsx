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
        Het doel van deze oefening is om een <code>Timer</code> component te
        maken. Vergeet deze ook niet te exporteren!
      </p>

      <p>
        De <code>Timer</code> toont op het scherm het aantal seconden dat het
        component leeft. De timer begint op 0 seconden en telt elke seconde er
        één bij op.
      </p>

      <p>
        Leeft de timer dus 5 seconden dan staat er op het scherm <code>5s</code>{' '}
        in beeld.
      </p>

      <p>
        Ook heeft de timer een pause knop, waarmee de tijd kan worden gestopt
        als de timer loopt, en weer kan worden gestart als de timer op pause
        staat.
      </p>

      <p>
        De timer staat <b>standaard gelijk aan</b>, en dus niet gepauseerd.
      </p>

      <p>
        De knop heeft als tekst <code>pause</code> wanneer de timer loopt, en
        wanneer de timer is gepauseerd de tekst <code>play</code>.
      </p>

      <p>
        Staat het component <code>10 seconden</code> aan en staat de timer niet
        op <code>pause</code> dan rendered het component <code>10s pause</code>.
      </p>

      <p>
        Staat het component <code>42 seconden</code> aan en staat de timer op{' '}
        <code>pause</code> dan rendered het component <code>42s play</code>.
      </p>
    </Exercise>
  );
}
