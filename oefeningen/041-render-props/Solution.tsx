import React from 'react';
import { ReactNode } from 'react';

// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return (
    <Authenticated fallback={() => <p>Not logged in</p>}>
      {() => <p>You are logged in</p>}
    </Authenticated>
  );
}

// Door deze boolean op false te zetten kan je testen
// of je Authenticated component goed omgaat met het
// scenario dat de gebruiker niet is ingelogd.
export let loggedIn = true;

// Deze functie is noodzakelijk voor de test niet wijzigen!
export function setLoggedIn(newLoggedIn: boolean): void {
  loggedIn = newLoggedIn;
}

type Props = {
  fallback?: () => ReactNode;
  children(): ReactNode;
};

export function Authenticated({ children, fallback }: Props) {
  if (!loggedIn) {
    if (fallback) {
      return <>{fallback()}</>;
    } else {
      return null;
    }
  }

  return <>{children()}</>;
}
