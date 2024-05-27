import { ReactNode, useEffect, useRef, useState } from 'react';
import { ExerciseErrorBoundry } from './components/ExerciseErrorBoundry/ExerciseErrorBoundry';
import { Fireworks } from '@fireworks-js/react';
import { Layout } from '../Layout/Layout';
import classNames from 'classnames';

type Tab = 'solution' | 'exercise';

type Props = {
  title: string;
  completed: boolean;
  showMenu: boolean;
  toggleMenu(): void;
  children: ReactNode;
  studentCode: ReactNode;
  solutionCode?: ReactNode;
  flexColumn?: boolean
};

export function Exercise({
  title,
  completed,
  toggleMenu,
  showMenu,
  children,
  studentCode,
  solutionCode,
  flexColumn
}: Props) {
  const initialCompleted = useRef(completed);
  const [showFireworks, setShowFireworks] = useState(false);
  const [tab, setTab] = useState<Tab>('exercise');

  useEffect(() => {
    if (showFireworks) {
      const id = setTimeout(() => {
        setShowFireworks(false);
      }, 5000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [showFireworks]);

  useEffect(() => {
    if (initialCompleted.current) {
      return;
    }
    setShowFireworks(completed);
  }, [completed]);

  return (
    <>
      <Layout
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        title={title}
        completed={completed}
      >
        <div className="col-span-2 border-r-4 border-gray-500">
          <h1 className="block text-xl font-bold ml-4 mt-3">De oefening</h1>

          <div className="pl-4 pr-2">{children}</div>

          <div className="border-t-4 border-gray-500 pl-4 pr-2">
            <p>
              Zorg dat de test genaamd <code>{title}</code> slaagt.
            </p>

            <p>
              Maak de oefening in het volgende bestand: <br />
              <code>/oefeningen/{title}/Oefening.tsx</code> <br />
            </p>

            <p>
              De oplossing staat onder het bestand genaamd: <br />
              <code>/oefeningen/{title}/Solution.tsx</code>.<br /> Bekijk deze
              als je er niet uit komt, en ook als je klaar bent om even te
              vergelijken.
            </p>
          </div>
        </div>

        <div className="col-span-4 border-r-4 border-gray-500">
          {solutionCode ? (
            <div className="border-b-4 border-gray-500 p-4 flex justify-center items-center gap-2">
              Bekijk:
              <button
                className={classNames('mx-1', {
                  'font-bold': tab === 'exercise',
                })}
                onClick={() => setTab('exercise')}
              >
                Jouw oplossing
              </button>
              |
              <button
                className={classNames('mx-1', {
                  'font-bold': tab === 'solution',
                })}
                onClick={() => setTab('solution')}
              >
                Bekijk voorbeeld
              </button>
            </div>
          ) : null}

          <div className={classNames("flex justify-center mt-4", {'flex-col': flexColumn})}>
            {tab === 'exercise' ? (
              <ExerciseErrorBoundry>{studentCode}</ExerciseErrorBoundry>
            ) : (
              solutionCode
            )}
          </div>
        </div>
      </Layout>

      {showFireworks ? (
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          style={{
            top: 0,
            left: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        />
      ) : null}
    </>
  );
}
