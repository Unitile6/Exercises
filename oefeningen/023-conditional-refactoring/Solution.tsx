// Deze personen niet aanpassen:

const maarten = {
  name: 'Maarten',
  age: 33,
  alive: true,
};

const owen = {
  name: 'Maarten',
  age: 5,
  alive: true,
};

const jane = {
  name: 'Maarten',
  age: 2,
  alive: true,
};

const plato = {
  name: 'Plato',
  age: 66,
  alive: false,
};

export function Oefening() {
  return (
    <div>
      {maarten.alive ? <Greeter {...maarten} /> : null}
      {owen.alive ? <Greeter {...owen} /> : null}
      {jane.alive ? <Greeter {...jane} /> : null}
      {plato.alive ? <Greeter {...plato} /> : null}
    </div>
  );
}

type Props = {
  name: string;
  age: number;
};

export function Greeter({ name, age }: Props) {
  return (
    <p>
      Hi {name} your age is {age} years old and you are alive.
    </p>
  );
}
