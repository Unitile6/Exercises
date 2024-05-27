import React, { ExoticComponent, useState } from "react";
import { Suspense, ReactNode } from "react";
import motion from "framer-motion";
// Importing types from types.ts
import {
    Coord,
    Position,
    KeyPointDotProps,
    StaticSVGBodyPartProps,
    DynamicSVGBodyPartProps,
  } from "./Types";

var showkeypoints = false; // Show keypoints and lines
var keypointdebug = false; // Show keypoint linelengths, names.
var bodypartdebug = false; // Show object names.

const StaticSVGBodyPart: React.FC<StaticSVGBodyPartProps> = ({
  name,
  center,
  r,
  BodyPartComponent,
}: StaticSVGBodyPartProps) => {
  //const rectLength = calclength;
  //const rectWidth = calcwidth;
  const radius = r;
  const centerX = center.x;
  const centerY = center.y;
  const scale = 1;
  const angle = 0;
  // Calculate the scaling factors
  //const scale = rectWidth / linelength;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <foreignObject x={centerX} y={centerY} r={radius}>
          <BodyPartComponent
            style={{
              transformOrigin: `${centerX}px ${centerY}px`, // Set the origin of the transformation
              transform: `translate(${centerX}px, ${centerY}px) rotate(${angle}deg) scale(${scale}, ${scale})`, // Apply translate, rotate, and scale transformations
            }}
          />
        </foreignObject>
      </Suspense>
    </>
  );
};

const KeyPointDot: React.FC<KeyPointDotProps> = ({
  name,
  position,
}: KeyPointDotProps) => {
  const radius = 2;

  const centerX = position.x + radius / 2;
  const centerY = position.y + radius / 2;

  return (
    <>
      <circle
        cx={position.x}
        cy={position.y}
        r={radius}
      />
      {keypointdebug && (
        <text
          fontSize={10}
          x={centerX}
          y={centerY}
          style={{ textDecoration: "underline" }}
        >
          {name}
        </text>
      )}
    </>
  );
};

const DynamicSVGBodyPart: React.FC<DynamicSVGBodyPartProps> = ({
  // CenterAtKeyPoint with length.
  name,
  origin,
  angle,
  linelength,
}: DynamicSVGBodyPartProps) => {
  const aspectRatio = 1 / 4;
  const calcwidth = linelength * aspectRatio;
  const calclength = Math.sqrt(
    Math.pow(calcwidth, 2) + Math.pow(linelength, 2)
  );
  //const link = `${name}.svg`; // Adjust as needed
  const BodyPartComponent = React.lazy(() => import(`./svgs/${name}.tsx`));

  const rectLength = calclength;
  const rectWidth = calcwidth;
  const centerX = origin.x;
  const centerY = origin.y;

  // Calculate the scaling factors
  const scaleX = rectWidth / linelength;
  const scaleY = rectLength / linelength;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <foreignObject
          x={origin.x}
          y={origin.y}
          width={linelength}
          height={linelength}
        >
          <BodyPartComponent
            style={{
              transformOrigin: `${centerX}px ${centerY}px`, // Set the origin of the transformation
              transform: `translate(${centerX}px, ${centerY}px) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`, // Apply translate, rotate, and scale transformations
            }}
          />
        </foreignObject>
      </Suspense>

      {bodypartdebug && (
        <text
          fontSize={10}
          x={origin.x}
          y={origin.y - 2}
          style={{ textDecoration: "underline" }}
        >
          {name}
        </text>
      )}
    </>
  );
};

export default function Skeleton() {
  const viewBoxWidth = 1000;
  const viewBoxHeight = 1000;

  const [nose, setNose] = useState<Position>({ position: { x: 250, y: 100 } });
  const [leftEye, setLeftEye] = useState<Position>({
    position: { x: 225, y: 90 },
  });
  const [rightEye, setRightEye] = useState<Position>({
    position: { x: 275, y: 90 },
  });
  const [leftEar, setLeftEar] = useState<Position>({
    position: { x: 200, y: 100 },
  });
  const [rightEar, setRightEar] = useState<Position>({
    position: { x: 300, y: 100 },
  });
  const [leftShoulder, setLeftShoulder] = useState<Position>({
    position: { x: 200, y: 150 },
  });
  const [rightShoulder, setRightShoulder] = useState<Position>({
    position: { x: 300, y: 150 },
  });
  const [leftElbow, setLeftElbow] = useState<Position>({
    position: { x: 175, y: 225 },
  });
  const [rightElbow, setRightElbow] = useState<Position>({
    position: { x: 325, y: 225 },
  });
  const [leftHand, setLeftHand] = useState<Position>({
    position: { x: 150, y: 275 },
  });
  const [rightHand, setRightHand] = useState<Position>({
    position: { x: 350, y: 275 },
  });
  const [leftHip, setLeftHip] = useState<Position>({
    position: { x: 210, y: 300 },
  });
  const [rightHip, setRightHip] = useState<Position>({
    position: { x: 290, y: 300 },
  });
  const [leftKnee, setLeftKnee] = useState<Position>({
    position: { x: 225, y: 390 },
  });
  const [rightKnee, setRightKnee] = useState<Position>({
    position: { x: 275, y: 390 },
  });
  const [leftFoot, setLeftFoot] = useState<Position>({
    position: { x: 225, y: 475 },
  });
  const [rightFoot, setRightFoot] = useState<Position>({
    position: { x: 275, y: 475 },
  });
  const [chest, setChest] = useState<Position>({
    position: { x: 250, y: 100 },
  });

  type idbpsDataSet = {
    nose: { x: number; y: number };
    leftEye: { x: number; y: number };
    rightEye: { x: number; y: number };
    leftEar: { x: number; y: number };
    rightEar: { x: number; y: number };
    leftShoulder: { x: number; y: number };
    rightShoulder: { x: number; y: number };
    leftElbow: { x: number; y: number };
    rightElbow: { x: number; y: number };
    leftHand: { x: number; y: number };
    rightHand: { x: number; y: number };
    leftHip: { x: number; y: number };
    rightHip: { x: number; y: number };
    leftKnee: { x: number; y: number };
    rightKnee: { x: number; y: number };
    leftFoot: { x: number; y: number };
    rightFoot: { x: number; y: number };
    chest: { x: number; y: number };
  };
  function receiveData(dataset: idbpsDataSet) {
    setNose({ position: dataset.nose });
    setLeftEye({ position: dataset.leftEye });
    setRightEye({ position: dataset.rightEye });
    setLeftEar({ position: dataset.leftEar });
    setRightEar({ position: dataset.rightEar });
    setLeftShoulder({ position: dataset.leftShoulder });
    setRightShoulder({ position: dataset.rightShoulder });
    setLeftElbow({ position: dataset.leftElbow });
    setRightElbow({ position: dataset.rightElbow });
    setLeftHand({ position: dataset.leftHand });
    setRightHand({ position: dataset.rightHand });
    setLeftHip({ position: dataset.leftHip });
    setRightHip({ position: dataset.rightHip });
    setLeftKnee({ position: dataset.leftKnee });
    setRightKnee({ position: dataset.rightKnee });
    setLeftFoot({ position: dataset.leftFoot });
    setRightFoot({ position: dataset.rightFoot });
    setChest({ position: dataset.chest });
  }

  const BodyPart_Nose = React.lazy(() => import("../svgs/nose"));
  //const BodyPart_Head = React.lazy(() => import('../svgs/head'));
  const BodyPart_LeftEye = React.lazy(() => import("../svgs/leftEye"));
  const BodyPart_RightEye = React.lazy(() => import("../svgs/rightEye"));
  //const BodyPart_LeftEar = React.lazy(() => import('../svgs/leftEar'));
  //const BodyPart_RightEar = React.lazy(() => import('../svgs/rightEar'));
  const BodyPart_LeftHand = React.lazy(() => import("../svgs/leftHand"));
  const BodyPart_RightHand = React.lazy(() => import("../svgs/rightHand"));
  const BodyPart_LeftUpperArm = React.lazy(() => import("../svgs/leftUpperArm"));
  const BodyPart_RightUpperArm = React.lazy(() => import("../svgs/rightUpperArm"));
  const BodyPart_LeftLowerArm = React.lazy(() => import("../svgs/leftLowerArm"));
  const BodyPart_RightLowerArm = React.lazy(() => import("../svgs/rightLowerArm"));
  const BodyPart_LeftShin = React.lazy(() => import("../svgs/leftShin"));
  const BodyPart_RightShin = React.lazy(() => import("../svgs/rightShin"));
  const BodyPart_LeftFemur = React.lazy(() => import("../svgs/leftFemur"));
  const BodyPart_RightFemur = React.lazy(() => import("../svgs/rightFemur"));
  //const BodyPart_Body = React.lazy(() => import('../svgs/body'));
  const BodyPart_PLACEHOLDER = React.lazy(() => import("../svgs/placeholder"));
  //const {BodyPart_Nose} = await BodyPart_Nose;


  const keypoints = {
    nose: { position: nose.position },
    leftEye: { position: leftEye.position },
    rightEye: { position: rightEye.position },
    leftEar: { position: leftEar.position },
    rightEar: { position: rightEar.position },
    leftShoulder: { position: leftShoulder.position },
    rightShoulder: { position: rightShoulder.position },
    leftElbow: { position: leftElbow.position },
    rightElbow: { position: rightElbow.position },
    leftHand: { position: leftHand.position },
    rightHand: { position: rightHand.position },
    leftHip: { position: leftHip.position },
    rightHip: { position: rightHip.position },
    leftKnee: { position: leftKnee.position },
    rightKnee: { position: rightKnee.position },
    leftFoot: { position: leftFoot.position },
    rightFoot: { position: rightFoot.position },
    chest: { position: chest.position },
  };

  const skeletonConnections = [
    // Upper body
    ["leftShoulder", "leftElbow"],
    ["leftElbow", "leftHand"],
    ["leftShoulder", "rightShoulder"],
    ["rightShoulder", "rightElbow"],
    ["rightElbow", "rightHand"],
    // Lower body
    ["leftShoulder", "leftHip"],
    ["rightHip", "leftHip"],
    ["rightShoulder", "rightHip"],
    ["leftHip", "leftKnee"],
    ["leftKnee", "leftFoot"],
    ["rightHip", "rightKnee"],
    ["rightKnee", "rightFoot"],
  ];

  // Function to calculate angle between two points
  const calculateAngle = (point1: Coord, point2: Coord) => {
    const deltaX = point2.x - point1.x;
    const deltaY = point2.y - point1.y;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  const scaleLength = (distance: number, maxWidth: number) => {
    const maxDistance = Math.hypot(maxWidth, 30); // Considering the rectangle's height as 30
    return (distance / maxDistance) * maxWidth;
  };

  const distanceNoseToEar = Math.hypot(
    nose.position.x - leftEar.position.x,
    nose.position.y - leftEar.position.y
  );

  const calculateDistance = (point1: Coord, point2: Coord) => {
    return Math.hypot(point2.x - point1.x, point2.y - point1.y);
  };

  function distance(point1: Coord, point2: Coord) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  return (
    <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
      <polygon
        points={`${leftShoulder.position.x},${leftShoulder.position.y} ${rightShoulder.position.x},${rightShoulder.position.y} ${rightHip.position.x},${rightHip.position.y} ${leftHip.position.x},${leftHip.position.y}`}
        fill={"blue"}
        stroke={"black"}
      ></polygon>
      {/* Use BodyPart component for each body part */}

      <StaticSVGBodyPart
        name="rightEar"
        BodyPartComponent={BodyPart_PLACEHOLDER}
        center={keypoints.rightEar.position}
        r={16}
      />
      <StaticSVGBodyPart
        name="leftEar"
        BodyPartComponent={BodyPart_PLACEHOLDER}
        center={keypoints.leftEar.position}
        r={16}
      />
      <StaticSVGBodyPart
        name="head"
        BodyPartComponent={BodyPart_PLACEHOLDER}
        center={keypoints.nose.position}
        r={distanceNoseToEar}
      />
      <StaticSVGBodyPart
        name="nose"
        BodyPartComponent={BodyPart_Nose}
        center={keypoints.nose.position}
        r={8}
      />
      <StaticSVGBodyPart
        name="leftEye"
        BodyPartComponent={BodyPart_LeftEye}
        center={keypoints.leftEye.position}
        r={8}
      />
      <StaticSVGBodyPart
        name="rightEye"
        BodyPartComponent={BodyPart_RightEye}
        center={keypoints.rightEye.position}
        r={8}
      />
      <StaticSVGBodyPart
        name="leftHand"
        BodyPartComponent={BodyPart_LeftHand}
        center={leftHand.position}
        r={11}
      />
      <StaticSVGBodyPart
        name="rightHand"
        center={rightHand.position}
        r={11}
        BodyPartComponent={BodyPart_RightHand}
      />
      <StaticSVGBodyPart
        name="leftFoot"
        BodyPartComponent={BodyPart_PLACEHOLDER}
        center={leftFoot.position}
        r={15}
      />
      <StaticSVGBodyPart
        name="rightFoot"
        BodyPartComponent={BodyPart_PLACEHOLDER}
        center={rightFoot.position}
        r={15}
      />
      <DynamicSVGBodyPart
        name="leftUpperArm"
        BodyPartComponent={BodyPart_LeftUpperArm}
        origin={leftShoulder.position}
        angle={calculateAngle(leftShoulder.position, leftElbow.position)}
        linelength={Math.sqrt(
          Math.pow(leftElbow.position.x - leftShoulder.position.x, 2) +
            Math.pow(leftElbow.position.y - leftShoulder.position.y, 2)
        )}
      />
      <DynamicSVGBodyPart
        name="rightUpperArm"
        BodyPartComponent={BodyPart_RightUpperArm}
        origin={rightShoulder.position}
        angle={calculateAngle(rightShoulder.position, rightElbow.position)}
        linelength={calculateDistance(
          rightShoulder.position,
          rightElbow.position
        )}
      />
      <DynamicSVGBodyPart
        name="leftLowerArm"
        BodyPartComponent={BodyPart_LeftLowerArm}
        origin={leftElbow.position}
        angle={calculateAngle(leftElbow.position, leftHand.position)}
        linelength={calculateDistance(leftElbow.position, leftHand.position)}
      />
      <DynamicSVGBodyPart
        name="rightLowerArm"
        origin={rightElbow.position}
        BodyPartComponent={BodyPart_RightLowerArm}
        angle={calculateAngle(rightElbow.position, rightHand.position)}
        linelength={calculateDistance(rightElbow.position, rightHand.position)}
      />
      <DynamicSVGBodyPart
        name="leftFemur"
        BodyPartComponent={BodyPart_LeftFemur}
        origin={leftHip.position}
        angle={calculateAngle(leftHip.position, leftKnee.position)}
        linelength={calculateDistance(leftHip.position, leftKnee.position)}
      />
      <DynamicSVGBodyPart
        name="rightFemur"
        BodyPartComponent={BodyPart_RightFemur}
        origin={rightHip.position}
        angle={calculateAngle(rightHip.position, rightKnee.position)}
        linelength={calculateDistance(rightHip.position, rightKnee.position)}
      />
      <DynamicSVGBodyPart
        name="leftShin"
        BodyPartComponent={BodyPart_LeftShin}
        origin={leftKnee.position}
        angle={calculateAngle(leftKnee.position, leftFoot.position)}
        linelength={calculateDistance(leftKnee.position, leftFoot.position)}
      />
      <DynamicSVGBodyPart
        name="rightShin"
        BodyPartComponent={BodyPart_RightShin}
        origin={rightKnee.position}
        angle={calculateAngle(rightKnee.position, rightFoot.position)}
        linelength={calculateDistance(rightKnee.position, rightFoot.position)}
      />
      {/* Render KeyPoint Components */}
      {showkeypoints && (
        <>
          <KeyPointDot
            name="nose"
            position={nose.position}
            angle={calculateAngle(nose.position, leftEye.position)}
          />
          <KeyPointDot
            name="leftEye"
            position={leftEye.position}
            angle={calculateAngle(leftEye.position, nose.position)}
          />
          <KeyPointDot
            name="rightEye"
            position={rightEye.position}
            angle={calculateAngle(rightEye.position, nose.position)}
          />
          <KeyPointDot
            name="leftEar"
            position={leftEar.position}
            angle={calculateAngle(leftEar.position, nose.position)}
          />
          <KeyPointDot
            name="rightEar"
            position={rightEar.position}
            angle={calculateAngle(rightEar.position, nose.position)}
          />
          <KeyPointDot
            name="leftShoulder"
            position={leftShoulder.position}
            angle={calculateAngle(leftShoulder.position, nose.position)}
          />
          <KeyPointDot
            name="rightShoulder"
            position={rightShoulder.position}
            angle={calculateAngle(rightShoulder.position, nose.position)}
          />
          <KeyPointDot
            name="leftElbow"
            position={leftElbow.position}
            angle={calculateAngle(leftElbow.position, leftShoulder.position)}
          />
          <KeyPointDot
            name="rightElbow"
            position={rightElbow.position}
            angle={calculateAngle(rightElbow.position, rightShoulder.position)}
          />
          <KeyPointDot
            name="leftHand"
            position={leftHand.position}
            angle={calculateAngle(leftHand.position, leftElbow.position)}
          />
          <KeyPointDot
            name="rightHand"
            position={rightHand.position}
            angle={calculateAngle(rightHand.position, rightElbow.position)}
          />
          <KeyPointDot
            name="leftHip"
            position={leftHip.position}
            angle={calculateAngle(leftHip.position, leftShoulder.position)}
          />
          <KeyPointDot
            name="rightHip"
            position={rightHip.position}
            angle={calculateAngle(rightHip.position, rightShoulder.position)}
          />
          <KeyPointDot
            name="leftKnee"
            position={leftKnee.position}
            angle={calculateAngle(leftKnee.position, leftHip.position)}
          />
          <KeyPointDot
            name="rightKnee"
            position={rightKnee.position}
            angle={calculateAngle(rightKnee.position, rightHip.position)}
          />
          <KeyPointDot
            name="leftFoot"
            position={leftFoot.position}
            angle={calculateAngle(leftFoot.position, leftKnee.position)}
          />
          <KeyPointDot
            name="rightFoot"
            position={rightFoot.position}
            angle={calculateAngle(rightFoot.position, rightKnee.position)}
          />
          <KeyPointDot name="chest" position={chest.position} />

          {skeletonConnections.map(([start, end], index) => {
            const startX = keypoints[start].position.x;
            const startY = keypoints[start].position.y;
            const endX = keypoints[end].position.x;
            const endY = keypoints[end].position.y;

            // Calculate distance between points
            const distance = Math.sqrt(
              Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
            );

            // Calculate position for text element
            const textX = (startX + endX) / 2;
            const textY = (startY + endY) / 2;

            return (
              <g key={index}>
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="black"
                />
                <text
                  x={textX}
                  y={textY}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize={8}
                >
                  {distance.toFixed(2)}px
                </text>
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
}
