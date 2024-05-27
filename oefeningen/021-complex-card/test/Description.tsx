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
        Laten we onze card nog verder uitbreiden, met een header en footer. Een
        card heeft vaak een header en een footer die je aparte content kan
        geven.
      </p>

      <p>
        Maak een component genaamd <code>Card</code>, en exporteer deze, zorg
        dat hij de volgende props accepteerd:
      </p>

      <p>
        1. Een prop genaamd <code>header</code> een <code>ReactNode</code>.
      </p>

      <p>
        2. Een prop genaamd <code>footer</code> een <code>ReactNode</code>.
      </p>

      <p>
        3. Een prop genaamd <code>children</code> een <code>ReactNode</code>.
      </p>

      <p>
        Definieer je <code>Props</code> ook met TypeScript.
      </p>

      <p>Zorg dat de volgende aanroep zou werken:</p>

      <Code>
        {`
<Card
  header={<h1>Bulbasaur</h1>}
  footer={
    <div>
      <span>Grass</span>
      <span>Poison</span>
    </div>
  }
>
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    alt="Bulbasaurs sprite"
  />
  <p>
    There is a plant seed on its back right from the day this Pokémon is
    born. The seed slowly grows larger.
  </p>
</Card>
        `}
      </Code>

      <p>
        Render de eerst de <code>header</code>, dan de <code>children</code> en
        als laatste de <code>footer</code>.
      </p>

      <p>
        Styling is optioneel maar je kan de <code>Oefening.css</code> aanpassen
        om het geheel wat leuker te maken. Je hebt ook beschikking tot{' '}
        <a
          href="https://tailwindcss.com/"
          className="underline text-purple-600"
          target="blank"
          rel="noopener"
        >
          tailwind
        </a>{' '}
        als je dat liever gebruikt.
      </p>

      <p>
        Je mag ook de aanroep van de <code>Card</code> aanpassen, als de tekst,
        titel, type van de pokemon, en afbeelding er maar in staan.
      </p>
    </Exercise>
  );
}
