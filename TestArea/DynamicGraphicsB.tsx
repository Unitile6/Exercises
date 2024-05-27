import React from 'react';
import { Ninja } from './DynamicGraphics'; // Import your Ninja component
import { Grid } from '@mui/material';

type GridOfNinjasProps = {
  numberOfNinjas: number;
  isRot: number;
}

export default function GridOfNinjas({ numberOfNinjas, isRot }: GridOfNinjasProps){
  const gridItems: React.ReactNode[] = [];

  // Create grid items dynamically
  for (let i = 0; i < numberOfNinjas; i++) {
    gridItems.push(
      <div className="grid-item" key={i}>
        <Ninja toRotate={isRot} />
      </div>
    );
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {gridItems}
      </Grid>
  );
}
