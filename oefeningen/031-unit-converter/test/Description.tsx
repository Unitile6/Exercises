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
      <p className="bg-yellow-300 p-4">
        <b>LET OP</b>: deze oefening is wat lastiger dan de vorige en test je
        begrip van <code>useState</code>, het is niet erg als je lang over de
        oefening doet, of het niet lukt. Het is handig om bij deze oefening
        eerst even te spelen met "Bekijk voorbeeld", zodat je ziet wat je moet
        maken.
      </p>

      <p>
        We gaan een converter schrijven die van lengte maten zoals kilometer
        naar meter kan converteren en terug.
      </p>

      <p>
        Maak een component genaamd <code>UnitConverter</code> dit component
        heeft geen props. <b>Exporteer</b> het component ook!
      </p>

      <p>Jij krijgt een aantal dingen cadeau:</p>

      <p>
        1. Een array genaamd <code>units</code> met alle lengte eenheden in
        correcte volgorde van groot naar klein.
      </p>

      <p>
        2. Een type genaamd <code>Unit</code> een union van alle units.
      </p>

      <p>
        3. Een helper functie genaamd <code>isNumeric</code> om te kijken of een
        string alleen getallen bevat.
      </p>

      <p>
        4. Een helper functie genaamd <code>convert</code> om units te
        converteren van de één naar de ander. Bestudeer deze en vogel zelf uit
        welke parameters deze functie nodig heeft.
      </p>

      <p>
        Zet een twee <code>input</code> elementen op het scherm, en zet twee{' '}
        <code>select</code> elementen op het scherm.
      </p>

      <p>
        Vul de <code>select</code> elementen met de <code>units</code>
        array. Selecteer standaard <code>km</code> in de eerste{' '}
        <code>select</code>, en in de tweede <code>m</code>.
      </p>

      <p>
        Wanneer de gebruiker een getal invoert in de <code>input</code>, dan
        converteer je de andere input waar de gebruiker niets mee doet
        automatisch.
      </p>

      <p>
        De éénheden hangen natuurlijk af van de selectie in de{' '}
        <code>select</code> elementen.
      </p>

      <p>
        Vult de gebruiker in het eerste <code>input</code> de waarde{' '}
        <code>1000</code> in dan, moet in het tweede <code>input</code> de
        waarde <code>1000000</code> automatisch komen te staan. 1000 kilometer
        is 1.000.000 meter.
      </p>

      <p>
        Vult de gebruiker in het tweede <code>input</code>
        de waarde <code>1000</code> in dan, moet in het eerste{' '}
        <code>input</code> de waarde <code>1</code> automatisch komen te staan.
        1000 meter is 1 meter.
      </p>

      <p>
        Veranderd de gebruiker de eenheden door de <code>select</code> te
        gebruiken dan, pas je de waarde van de tegenovergestelde
        <code>input</code> aan.
      </p>

      <p>
        Staat het eerste paar dus op <code>km</code> en <code>1</code> en het
        tweede paar op <code>m</code> en <code>1000</code>. En selecteerd de
        gebruiker in de tweede <code>select</code> nu <code>hm</code> dan moet
        de tweede input dus <code>10</code> worden.
      </p>

      <p>Nu de andere kant op:</p>

      <p>
        Staat het eerste paar dus op <code>km</code> en <code>0.001</code> en
        het tweede paar op <code>m</code> en <code>1</code>. En selecteerd de
        gebruiker in de eerste <code>select</code> nu <code>cm</code> dan moet
        de eerste input dus <code>100</code> worden.
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
        Je mag ook de aanroep van de <code>Oefening</code> aanpassen als je de
        namen maar rendered.
      </p>
    </Exercise>
  );
}
