
export let country: Country ={
  name: "The Netherlands",
  language: "Dutch",
  type: "democracy",
  population: 17
};

export type Country = {
  name: string;
  language: string;
  type: string;
  population: number;
}