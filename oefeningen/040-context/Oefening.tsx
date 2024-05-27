import classNames from 'classnames';
import { ReactNode } from 'react';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  
  function toggleTheme() {
    // Zorg dat dit gaat werken.
  }

  return (
    <ThemeCard>
      <ThemeButton onClick={toggleTheme}>Toggle theme</ThemeButton>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque
        nisi eaque placeat amet porro officiis illo? Eaque labore commodi
        aliquam non asperiores, vitae molestiae itaque sequi, nihil consectetur
        exercitationem!
      </p>
    </ThemeCard>
  );
}

// Maak hier beneden de context aan, en pas de useTheme functie aan:

export type Theme = 'dark' | 'light';

export function useTheme(): Theme {
  // Zorg dat dit gaat werken.
  return 'light';
}

// Pas de componenten hier beneden niet aan!

function ThemeCard({ children }: { children: ReactNode }) {
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

function ThemeButton({
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
