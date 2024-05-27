// Pas de functie "Oefening" niet aan.
export function Oefening() {
  return (
    <div>
      <Block color="red" />
      <Block color="white" />
      <Block color="blue" />

      <br />

      <Block color="red" width={50} height={10} />
      <Block color="white" width={50} height={10} />
      <Block color="blue" width={50} height={10} />

      <br />

      <Block color="red" width={500} height={100} />
      <Block color="white" width={500} height={100} />
      <Block color="blue" width={500} height={100} />
    </div>
  );
}

type Color = 'red' | 'white' | 'blue';

type Props = {
  color: Color;
  width?: number;
  height?: number;
};

export function Block({ color, width = 200, height = 50 }: Props) {
  return <div style={{ backgroundColor: color, width, height }} />;
}