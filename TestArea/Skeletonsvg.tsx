import React, { ExoticComponent, JSXElementConstructor, useState } from "react";
import { Suspense, ReactNode } from "react";
import motion from "framer-motion";

import BodyPart_Nose from "./svgs/nose";
import BodyPart_Mouth from "./svgs/mouth";
import BodyPart_Head from "./svgs/head";
import BodyPart_LeftEye from "./svgs/leftEye";
import BodyPart_RightEye from "./svgs/rightEye";
// import BodyPart_LeftEar from './svgs/leftEar';
// import BodyPart_RightEar from './svgs/rightEar';
import BodyPart_LeftHand from "./svgs/leftHand";
import BodyPart_RightHand from "./svgs/rightHand";
import BodyPart_LeftUpperArm from "./svgs/leftUpperArm";
import BodyPart_RightUpperArm from "./svgs/rightUpperArm";
import BodyPart_LeftLowerArm from "./svgs/leftLowerArm";
import BodyPart_RightLowerArm from "./svgs/rightLowerArm";
import BodyPart_LeftShin from "./svgs/leftShin";
import BodyPart_RightShin from "./svgs/rightShin";
import BodyPart_LeftFemur from "./svgs/leftFemur";
import BodyPart_RightFemur from "./svgs/rightFemur";
import BodyPart_LeftFoot from "./svgs/leftFoot";
import BodyPart_RightFoot from "./svgs/rightFoot";
import BodyPart_Body from "./svgs/body";
import BodyPart_PLACEHOLDER from "./svgs/placeholder";

var showkeypoints = true; // Show keypoints and lines
var keypointdebug = false; // Show keypoint linelengths, names.
var bodypartdebug = false; // Show object names.
var positioningdebug = true; // Show all objects as target-placeholder. Also prevent rotation.
const GLOBAL_SCALE_FACTOR = 0.05;

type Coord = {
  x: number;
  y: number;
};
type Position = {
  position: Coord;
};

type KeyPointDotProps = {
  name: string;
  position: Coord;
  angle?: number;
  width?: number;
  height?: number;
};

type StaticSVGBodyPartProps = {
  name: string;
  center: Coord;
  viewBoxSize: Coord;
};
type DynamicSVGBodyPartProps = {
  name: string;
  origin: Coord;
  angle: number;
  linelength: number;
};

const StaticSVGBodyPart: React.FC<StaticSVGBodyPartProps> = ({
  name,
  center,
  viewBoxSize,
}: StaticSVGBodyPartProps) => {
  const centerX = center.x;
  const centerY = center.y;
  let scale = 1;
  let angle = 0;

  // Calculate the scaling factors
  //const scale = rectWidth / linelength;
  let BodyPartComponent;
  if (positioningdebug) {
    BodyPartComponent = BodyPart_PLACEHOLDER;
    angle = 0;
    scale = 1;
  } else {
    switch (name) {
      case "nose":
        BodyPartComponent = BodyPart_Nose;
        break;
      case "head":
        BodyPartComponent = BodyPart_Head;
        break;
      case "leftEye":
        BodyPartComponent = BodyPart_LeftEye;
        break;
      case "rightEye":
        BodyPartComponent = BodyPart_RightEye;
        break;
      // case 'leftEar':
      //   BodyPartComponent = BodyPart_LeftEar;
      //   break;
      // case 'rightEar':
      //   BodyPartComponent = BodyPart_RightEar;
      //   break;
      case "leftHand":
        BodyPartComponent = BodyPart_LeftHand;
        break;
      case "rightHand":
        BodyPartComponent = BodyPart_RightHand;
        break;
      case "mouth":
        BodyPartComponent = BodyPart_Mouth;
        break;
      case "leftFoot":
        BodyPartComponent = BodyPart_LeftFoot;
        break;
      case "rightFoot":
        BodyPartComponent = BodyPart_RightFoot;
        break;

      default:
        BodyPartComponent = BodyPart_PLACEHOLDER;
        break;
    }
  }
  return (
    <g>
      <BodyPartComponent
        //viewBox={`$0 0 ${viewBoxSize.x} ${viewBoxSize.y}`}
        style={{
          transform: `translate(${-80/2},${-80/2}) scale(${scale * GLOBAL_SCALE_FACTOR})`,
          transformOrigin: `${centerX}px ${centerY}px`,
        }}
      />
    </g>
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
      <circle cx={position.x} cy={position.y} r={radius} />
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
  const aspectRatio = 1; // Used to be 1/4
  const calcwidth = linelength * aspectRatio;
  const calclength = Math.sqrt(
    Math.pow(calcwidth, 2) + Math.pow(linelength, 2)
  );

  const rectLength = calclength;
  const rectWidth = calcwidth;
  const centerX = origin.x;
  const centerY = origin.y;

  angle -= 90;
  // Calculate the scaling factors
  let scaleX = rectWidth / linelength;
  let scaleY = rectLength / linelength;

  let BodyPartComponent;
  if (positioningdebug) {
    BodyPartComponent = BodyPart_PLACEHOLDER;
    angle = 0;
    scaleX = 1;
    scaleY = 1;
  } else {
    switch (name) {
      case "leftUpperArm":
        BodyPartComponent = BodyPart_LeftUpperArm;
        break;
      case "rightUpperArm":
        BodyPartComponent = BodyPart_RightUpperArm;
        break;
      case "leftLowerArm":
        BodyPartComponent = BodyPart_LeftLowerArm;
        break;
      case "rightLowerArm":
        BodyPartComponent = BodyPart_RightLowerArm;
        break;
      case "leftShin":
        BodyPartComponent = BodyPart_LeftShin;
        break;
      case "rightShin":
        BodyPartComponent = BodyPart_RightShin;
        break;
      case "leftFemur":
        BodyPartComponent = BodyPart_LeftFemur;
        break;
      case "rightFemur":
        BodyPartComponent = BodyPart_RightFemur;
        break;
      case "body":
        BodyPartComponent = BodyPart_Body;
        break;
      default:
        BodyPartComponent = BodyPart_PLACEHOLDER;
        break;
    }
  }

  return (
    <g>
      <BodyPartComponent
        style={{
          transformOrigin: `${centerX}px ${centerY}px`,
          transform: `translate(${0}px, ${0}px) 
          rotate(${angle}deg) scale(${scaleX * GLOBAL_SCALE_FACTOR}, ${
            scaleY * GLOBAL_SCALE_FACTOR
          })`,
        }}
      />
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
    </g>
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
  const [mouth, setMouth] = useState<Position>({
    position: { x: nose.position.x, y: nose.position.y + 6 },
  });
  const [body, setBody] = useState<Position>({
    position: {
      x: rightShoulder.position.x - leftShoulder.position.x,
      y: rightHip.position.x - leftHip.position.x,
    },
  });

  // lijst voor het mappen van de verbindingen
  // Kan mogelijk let worden i.v.m. updating.
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
  // Lijst van verbindingen t.b.v het tekenen van de connectielijnen.
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
  // Simulatie van een inkomende dataset. Voor een latere simulatie van beweging.
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
  // Functie die de binnenkomende dataset koppelt aan de states.
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
    setMouth({ position: { x: nose.position.x, y: nose.position.y + 6 } });
    setBody({
      position: {
        x: rightShoulder.position.x - leftShoulder.position.x,
        y: rightHip.position.x - leftHip.position.x,
      },
    });
  }

  // Function to calculate angle between two points
  const calculateAngle = (point1: Coord, point2: Coord) => {
    const deltaX = point2.x - point1.x;
    const deltaY = point2.y - point1.y;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  // Function to scale length. Which isn't currently done?/
  const scaleLength = (distance: number, maxWidth: number) => {
    const maxDistance = Math.hypot(maxWidth, 30); // Considering the rectangle's height as 30
    return (distance / maxDistance) * maxWidth;
  };

  // Alleen in gebruik voor het hoofd. Resize later verwerken in andere code.
  const distanceNoseToEar = Math.hypot(
    nose.position.x - leftEar.position.x,
    nose.position.y - leftEar.position.y
  );

  // Berekent de lengte van de lijn t.b.v de svg-files.
  // Heeft een betrouwbaardere getalszekerheid en beschermt tegen over/underticks.
  const calculateLineDistanceB = (point1: Coord, point2: Coord) => {
    return Math.hypot(point2.x - point1.x, point2.y - point1.y);
  };
  // Berekent de lengte van de lijn t.b.v de svg-files.
  // Zou sneller zijn.
  function calculateLineDistance(point1: Coord, point2: Coord) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Voor het aanpassen van de viewBox t.b.v. svg-centrepoint-positioning
  let viewBoxSize = { x: viewBoxWidth, y: viewBoxHeight };
  //viewBoxSize = { x: 297, y: 297 };
  return (
    <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
      {/* <polygon
        points={`${leftShoulder.position.x},${leftShoulder.position.y} ${rightShoulder.position.x},${rightShoulder.position.y} ${rightHip.position.x},${rightHip.position.y} ${leftHip.position.x},${leftHip.position.y}`}
        fill={"orange"}
        stroke={"black"}
      ></polygon> */}
      {/* Use BodyPart component for each body part */}
      <StaticSVGBodyPart
        name="body"
        center={body.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="rightEar"
        center={rightEar.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="leftEar"
        center={leftEar.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="head"
        center={nose.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="nose"
        center={nose.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="leftEye"
        center={leftEye.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="rightEye"
        center={rightEye.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="leftHand"
        center={leftHand.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="rightHand"
        center={rightHand.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="leftFoot"
        center={leftFoot.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="rightFoot"
        center={rightFoot.position}
        viewBoxSize={viewBoxSize}
      />
      <StaticSVGBodyPart
        name="mouth"
        center={mouth.position}
        viewBoxSize={viewBoxSize}
      />

      <DynamicSVGBodyPart
        name="leftUpperArm"
        origin={leftShoulder.position}
        angle={calculateAngle(leftShoulder.position, leftElbow.position)}
        linelength={Math.sqrt(
          Math.pow(leftElbow.position.x - leftShoulder.position.x, 2) +
            Math.pow(leftElbow.position.y - leftShoulder.position.y, 2)
        )}
      />
      <DynamicSVGBodyPart
        name="rightUpperArm"
        origin={rightShoulder.position}
        angle={calculateAngle(rightShoulder.position, rightElbow.position)}
        linelength={calculateLineDistance(
          rightShoulder.position,
          rightElbow.position
        )}
      />
      <DynamicSVGBodyPart
        name="leftLowerArm"
        origin={leftElbow.position}
        angle={calculateAngle(leftElbow.position, leftHand.position)}
        linelength={calculateLineDistance(
          leftElbow.position,
          leftHand.position
        )}
      />
      <DynamicSVGBodyPart
        name="rightLowerArm"
        origin={rightElbow.position}
        angle={calculateAngle(rightElbow.position, rightHand.position)}
        linelength={calculateLineDistance(
          rightElbow.position,
          rightHand.position
        )}
      />
      <DynamicSVGBodyPart
        name="leftFemur"
        origin={leftHip.position}
        angle={calculateAngle(leftHip.position, leftKnee.position)}
        linelength={calculateLineDistance(leftHip.position, leftKnee.position)}
      />
      <DynamicSVGBodyPart
        name="rightFemur"
        origin={rightHip.position}
        angle={calculateAngle(rightHip.position, rightKnee.position)}
        linelength={calculateLineDistance(
          rightHip.position,
          rightKnee.position
        )}
      />
      <DynamicSVGBodyPart
        name="leftShin"
        origin={leftKnee.position}
        angle={calculateAngle(leftKnee.position, leftFoot.position)}
        linelength={calculateLineDistance(leftKnee.position, leftFoot.position)}
      />
      <DynamicSVGBodyPart
        name="rightShin"
        origin={rightKnee.position}
        angle={calculateAngle(rightKnee.position, rightFoot.position)}
        linelength={calculateLineDistance(
          rightKnee.position,
          rightFoot.position
        )}
      />
      <DynamicSVGBodyPart
        name="rightShin"
        origin={rightKnee.position}
        angle={calculateAngle(rightKnee.position, rightFoot.position)}
        linelength={calculateLineDistance(
          rightKnee.position,
          rightFoot.position
        )}
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
