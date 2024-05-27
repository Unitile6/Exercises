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
      <p>We gaan nog een card maken deze keer een school rapport.</p>

      <p>
        Maak een component genaamd <code>Grade</code>, en exporteer deze, zorg
        dat hij de volgende props accepteerd:
      </p>

      <p>
        1. Een prop genaamd <code>name</code> een <code>string</code>.
      </p>

      <p>
        2. Een prop genaamd <code>grade</code> een <code>number</code>.
      </p>

      <p>
        Definieer je <code>Props</code> ook met TypeScript.
      </p>

      <p>Zorg dat de volgende aanroep zou werken:</p>

      <Code>
        {`
<div>
  <Grade name="English" grade={8} />
  <Grade name="Math" grade={6} />
  <Grade name="History" grade={9} />
  <Grade name="Arts" grade={4} />
  <Grade name="Biology" grade={6} />
  <Grade name="Physics" grade={3} />
  <Grade name="Spanish" grade={5} />
</div>
        `}
      </Code>

      <p>
        Je moet het volgende renderen in het <code>Grade</code> component: de
        naam van de grade, de grade zelf, en of de persoon geslaagt is voor het
        vak:
      </p>

      <p>
        Dit werkt als volgt, render het woord <code>"passed"</code> wanneer de
        grade hoger is dan <code>5</code> en anders het woord{' '}
        <code>"failed"</code>.
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
