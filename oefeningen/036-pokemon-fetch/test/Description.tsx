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
        In deze oefening wil ik dat je de pokemon van de back-end ophaalt zoals
        in de videos.
      </p>

      <p>
        Nu staan de pokemon nog hard-coded in de <code>Oefening.tsx</code>.
      </p>

      <p>
        Je mag zelf kiezen of je <code>@tanstack/react-query</code> of een{' '}
        <code>useEffect</code> met een <code>fetch</code> gebruikt.
      </p>

      <p>
        Zorg dat je de eerste 9 pokemon ophaalt via <code>/api/pokemon</code> en
        zorg dat ze gerendered worden.
      </p>

      <p>
        Voor <code>@tanstack/react-query</code> moet je ook de
        <code>/src/index.tsx</code> aanpassen en een{' '}
        <code>QueryClientProvider</code> toevoegen!
      </p>

      <p>
        Paginering en een loading state zijn niet noodzakelijk maar als je het leuk vindt
        dan mag het.
      </p>

      <p className="bg-yellow-300 p-4">
        <b>LET OP</b>: je moet wel je back-end aanhebben staan voor deze
        oefening.
      </p>
    </Exercise>
  );
}
