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
      <p>Laten we de nederlandse vlag na maken in React.</p>

      <p>
        Definieer een nieuw type in TypeScript met het <code>type</code> keyword
        genaamd <code>Color</code>. Zorg dat dit een union is van de volgende
        waardes: <code>"red"</code>, <code>"white"</code>, <code>"blue"</code>{' '}
        we willen natuurlijk alleen deze kleuren accepteren.
      </p>

      <p>
        Maak een component genaamd <code>Block</code>, en exporteer deze, zorg
        dat hij de volgende props accepteerd:
      </p>

      <p>
        1. Een prop genaamd <code>color</code> een <code>Color</code>.
      </p>

      <p>
        2. Een prop genaamd <code>width</code> een <code>number</code>, de div
        die je rendered moet width pixels breed zijn.
      </p>

      <p>
        3. Een prop genaamd <code>height</code> een <code>number</code>, de div
        die je rendered moet height pixels breed zijn.
      </p>

      <p>
        Definieer je <code>Props</code> ook met TypeScript.
      </p>

      <p>Zorg dat de volgende aanroep een nederlandse vlag toont:</p>

      <Code>
        {`
<div>
  <Block color="red" width={200} height={50} />
  <Block color="white" width={200} height={50} />
  <Block color="blue" width={200} height={50} />
</div>
        `}
      </Code>

      <p>
        <b>Hint:</b> je zal dus moeten werken met het <code>style</code>{' '}
        attribuut!
      </p>
    </Exercise>
  );
}
