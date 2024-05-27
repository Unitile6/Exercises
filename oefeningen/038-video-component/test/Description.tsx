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
        Maak een component genaamd <code>VideoPlayer</code> zorg dat
        deze een <code>video</code> element rendered.
      </p>

      <p>
        Gebruik als <code>src</code> voor het <code>video</code> element
        <code>/videos/bunny.mp4</code>.
      </p>

      <p>
        Maak een <code>button</code> wanneer je deze indrukt start 
        de video, wanneer je hem indrukt terwijl de video afspeelt
        pauseer je hem.
      </p>

      <p>
        Geef de button de tekst <code>"Play"</code> als de video
        op pause staat, en <code>"Pause"</code> als hij afspeelt.
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
    </Exercise>
  );
}
