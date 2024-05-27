import { Exercise } from '../../../src/components';

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
      studentCode={
        <p>
          Dit is een TypeScript oefening zonder iets visueels je gaat hier niets
          zien.
        </p>
      }
    >
      <p>
        Refactor de <code>sum</code> function van JavaScript naar TypeScript, voeg dus
        types toe voor de parameters <code>a</code>, en <code>b</code>, en een return type.
      </p>

      <p>
        De functie sum accepteert twee <b>getallen</b> als parameter, en telt deze blij
        elkaar op, het resultaat van de optelling is wat de functie returned.
      </p>
    </Exercise>
  );
}
