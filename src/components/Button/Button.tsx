import { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';

type ButtonMode = 'primary' | 'secondary' | 'danger';

type Props = {
  onClick(event: MouseEvent): void;
  children: ReactNode;
  mode?: ButtonMode 
};

export function Button({ onClick, children, mode = 'primary' }: Props) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center p-4 border text-white text-lg pointer',
        {
          "bg-green-600 hover:bg-green-800": mode === 'primary',
          "bg-gray-500 hover:bg-gray-800": mode === 'secondary',
          "bg-red-500 hover:bg-red-800": mode === 'danger'
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
