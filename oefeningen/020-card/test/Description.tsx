import { A, Code, Exercise } from '../../../src/components';
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
        In deze oefening gaan we een card component maken, een card is een
        visueel element dat een "doos" tekent om content heen.{' '}
        <A href="https://dribbble.com/tags/card_component">
          {' '}
          Scroll door eens door deze pagina voor wat voorbeelden.
        </A>
      </p>

      <p>
        Maak een component genaamd <code>Card</code>, en exporteer deze, zorg
        dat hij de volgende props accepteerd:
      </p>

      <p>
        1. Een prop genaamd <code>title</code> een <code>string</code>.
      </p>

      <p>
        2. Een prop genaamd <code>children</code> een <code>ReactNode</code>.
      </p>

      <p>
        Definieer je <code>Props</code> ook met TypeScript.
      </p>

      <p>Zorg dat de volgende aanroep zou werken:</p>

      <Code>
        {`
<Card title="Bulbasaur">
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
        Render de <code>title</code> en <code>children</code> zodat je
        daadwerkelijk wat ziet.
      </p>

      <p>
        Styling is optioneel maar je kan de <code>Oefening.css</code> aanpassen
        om het geheel wat leuker te maken. Je hebt ook beschikking tot{' '}
        <A href="https://tailwindcss.com/">tailwind</A> als je dat liever
        gebruikt.
      </p>

      <p>
        Je mag ook de aanroep van de <code>Card</code> aanpassen, als de tekst,
        titel en afbeelding er maar in staan.
      </p>
    </Exercise>
  );
}
