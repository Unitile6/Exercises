// Maak hier het type Car aan
type Car = {
  drive: () => string;
  brake: () => void;
  gas: (speed: number) => string;
  doors: (open: boolean) => string;
}

export const car: Car = {
  drive() {
    return "vroom vroom";
  },

  brake() {
    console.log("stop");
  },

  gas(speed: number) {
    return `I'm going ${speed} miles an hour`;
  },

  doors(open: boolean) {
    if (open) {
      return "The doors are opening";
    } else {
      return "The doors are closing";
    }
  }
}
