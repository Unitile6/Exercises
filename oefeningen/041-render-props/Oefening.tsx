
// Pas de naam van de functie "Oefening" niet aan, je moet wel
// de return van de "Oefening" aanpassen.
export function Oefening() {
  return <div>Maak de oefening door Oefening.tsx aan te passen.</div>;
}

// Door deze boolean op false te zetten kan je testen
// of je Authenticated component goed omgaat met het
// scenario dat de gebruiker niet is ingelogd.
export let loggedIn = true;

// Deze functie is noodzakelijk voor de test niet wijzigen!
export function setLoggedIn(newLoggedIn: boolean): void {
  loggedIn = newLoggedIn;
}
