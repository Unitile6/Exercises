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
      <p className="bg-yellow-300 p-4">
        <b>LET OP</b>: deze oefening is lastiger dan de rest en test je generics
        kennis, het is niet erg als je lang over de oefening doet, of het niet
        lukt.
      </p>

      <p>
        In de oefening zie je een functie gemaakt genaamd <code>every</code>,
        deze functie kijkt of elk item uit een array voldoet aan het
        "predicaat".
      </p>

      <p>
        Het <code>predicate</code> argument is een functie die een{' '}
        <code>boolean</code> teruggeeft op basis van elk item. Geeft elk item
        voor het predicate <code>true</code> terug dan is het resultaat van{' '}
        <code>every</code> ook <code>true</code>, anders als één item
        niet matched <code>false</code>.
      </p>

      <p>
        Zorg jij nou eens dat <code>every</code> getypeerd wordt middels
        TypeScript.
      </p>
    </Exercise>
  );
}
