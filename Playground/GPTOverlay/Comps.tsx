import React from "react";

interface KeypointProps {
    x: number;
    y: number;
}

export function Keypoint({ x, y }: KeypointProps): JSX.Element {
    return <circle cx={x} cy={y} r={5} fill="red" />;
}

interface LineProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export function Line({ x1, y1, x2, y2 }: LineProps): JSX.Element {
    return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "black", strokeWidth: 2 }} />;
}

interface BoneOverlayProps {
    x: number;
    y: number;
}

export function BoneOverlay({ x, y }: BoneOverlayProps): JSX.Element {
    return <image href={require("./bone.svg")} x={x} y={y} width={100} height={100} />;
}
