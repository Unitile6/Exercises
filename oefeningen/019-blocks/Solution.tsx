import React, { ReactNode } from 'react';

export function Oefening() {
  return (
    <div>
      <Block color="red" width={200} height={50} />
      <Block color="white" width={200} height={50} />
      <Block color="blue" width={200} height={50} />
    </div>
  );
}

type Color = 'red' | 'white' | 'blue';

type Props = {
  color: Color;
  width: number;
  height: number;
};

export function Block({ color, width, height }: Props) {
  return <div style={{ backgroundColor: color, width, height }} />;
}