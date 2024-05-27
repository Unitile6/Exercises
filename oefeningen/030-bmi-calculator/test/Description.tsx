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
        Maak een Body Mass Index calculator in een component genaamd
        <code>BMICalculator</code>.
      </p>

      <p>
        Maak twee <code>input</code> elementen met één voor de height, en één
        voor de <code>weight</code>. Begin de input velden standaard leeg.
      </p>

      <p>
        Zorg ook dat de inputs correcte labels hebben: het label voor de{' '}
        <strong>height input</strong> moet je <code>Height</code> noemen, het
        label voor de <strong>weight input</strong> moet je <code>Weight</code>{' '}
        noemen.
      </p>

      <p>
        In beide velden moeten "numerieke" waardes bevatten, anders toon je een
        foutmelding aan de gebruiker. Je kan gebruik maken van de{' '}
        <code>isNumeric</code> functie om te testen of een string alleen maar
        getallen bevat.
      </p>

      <p>
        Staat in <code>height</code> geen getal toon dan de foutmelding:{' '}
        <code>Please enter a number for the height.</code>.
      </p>

      <p>
        Staat in <code>weight</code> geen getal toon dan de foutmelding:{' '}
        <code>Please enter a number for the weight.</code>.
      </p>

      <p>
        Zijn <code>weight</code> en <code>height</code> allebei getallen,
        bereken dan de BMI door de functie <code>calculateBMI</code>
        aan te roepen.
      </p>

      <p>
        Is de weight <code>75</code> en de height <code>1.80</code> dan toon je
        de volgende text: <code>Your BMI is 23.1</code>.{' '}
        <strong>Let op:</strong> roep op het resultaat van{' '}
        <code>calculateBMI</code> nog even <code>.toFixed(1)</code> aan om niet
        zoveel getallen achter de comma te krijgen.
      </p>

      <p>
        Exporteer het <code>BMICalculator</code> component trouwens ook.
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
