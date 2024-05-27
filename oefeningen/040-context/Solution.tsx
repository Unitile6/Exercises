import classNames from 'classnames';
import { createContext, ReactNode, useContext, useState } from 'react';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <themeContext.Provider value={theme}>
      <ThemeCard>
        <ThemeButton onClick={toggleTheme}>
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </ThemeButton>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque
          nisi eaque placeat amet porro officiis illo? Eaque labore commodi
          aliquam non asperiores, vitae molestiae itaque sequi, nihil
          consectetur exercitationem!
        </p>
      </ThemeCard>
    </themeContext.Provider>
  );
}

export type Theme = 'dark' | 'light';

export const themeContext = createContext<Theme>('light');
themeContext.displayName = 'ThemeContext';

export function useTheme(): Theme {
  return useContext(themeContext);
}

// Pas de componenten hier beneden niet aan!

export function ThemeCard({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <div
      data-testid="card"
      className={classNames('border p-4 shadow max-w-lg mx-auto', {
        'text-white bg-gray-800': theme === 'dark',
        'text-black bg-white': theme === 'light',
      })}
    >
      {children}
    </div>
  );
}

export function ThemeButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  const theme = useTheme();

  return (
    <button
      className={classNames('border p-4 text-white font-bold', {
        'bg-black': theme === 'dark',
        'bg-purple-600': theme === 'light',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
