import {
  faBars,
  faCheckCircle,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useEffect} from 'react';

type Props = {
  title: string;
  showMenu: boolean;
  toggleMenu(): void;
  completed: boolean;
  children: ReactNode;
};

export function Layout({
  title,
  completed,
  toggleMenu,
  showMenu,
  children
}: Props) {
  useEffect(() => {
    // Scroll to top when clicking nav, otherwise really low links
    // will cause the exercise not being visible.
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <div className="h-16 pr-2 py-2 flex justify-between align-center items-center gap-4 border-b-4 border-gray-500">
          <button onClick={toggleMenu} className="mx-4">
            {showMenu ? (
              <FontAwesomeIcon icon={faClose} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
            <b className="ml-4 text-xl">
              {completed ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-600 mr-2"
                />
              ) : null}{' '}
              {title}
            </b>
          </button>

          {completed ? (
            <b>Gefeliciteerd jij hebt deze oefening behaald!</b>
          ) : null}
        </div>
      </div>
      <div className="grow border-b-4 border-gray-500 grid grid-cols-6">
        {children}
      </div>
    </>
  );
}
