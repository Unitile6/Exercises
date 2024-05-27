
export type Data<T> = {
  name: string;
  data: T;
};

export const a: Data<number> = {
  name: "Pinball machines owned",
  data: 0
};

export const b: Data<string> = {
  name: "My Eyecolor",
  data: "brown"
};

export const c: Data<boolean> = {
  name: "Has been to Canada",
  data: true
};