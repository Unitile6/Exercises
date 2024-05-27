import { faCheckCircle, faCircleH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  to: string;
  children: ReactNode;
  onClick(): void;
  completed: boolean;
  finished?: boolean;
};

export function NavLink({ to, children, onClick, completed, finished }: Props) {
  const { pathname } = useLocation();

  const active = decodeURIComponent(pathname) === to;

  if(finished)
    {
    return(
    <Link
      to={to}
      className={classNames(
        'border-b-2 ml-4 pb-4 pr-6 hover:underline whitespace-nowrap text-ellipsis overflow-hidden',
        {
          'font-bold js-active-link': active,
        }
      )}
      onClick={onClick}
      >
        <FontAwesomeIcon icon={faCircleH} className="text-red-600 mr-2" />
      {children}
    </Link>);
    }
  else{
  return (
    <Link
      to={to}
      className={classNames(
        'border-b-2 ml-4 pb-4 pr-6 hover:underline whitespace-nowrap text-ellipsis overflow-hidden',
        {
          'font-bold js-active-link': active,
        }
      )}
      onClick={onClick}
    >
      {completed ? (
        <FontAwesomeIcon pulse={true} spin={true} icon={faCheckCircle} className="text-green-600 mr-2" />
      ) : null}{' '}
      {children}
    </Link>
  );
}
}
