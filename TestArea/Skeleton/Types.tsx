// types.ts
import React, { ComponentElement, ReactNode } from "react";
export type Coord = {
    x: number;
    y: number;
  };
  
  export type Position = {
    position: Coord;
  };
  
  export type KeyPointDotProps = {
    name: string;
    position: Coord;
    angle?: number;
    width?: number;
    height?: number;
  };
  
  export type StaticSVGBodyPartProps = {
    name: string;
    center: Coord;
    r: number;
    BodyPartComponent: ReactNode;
  };
  
  export type DynamicSVGBodyPartProps = {
    name: string;
    origin: Coord;
    angle: number;
    linelength: number;
    BodyPartComponent: ReactNode;
  };
  