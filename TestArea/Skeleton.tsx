import React, { useState } from "react";
import motion from "framer-motion";

var showkeypoints = true; // Show keypoints and lines
var keypointdebug = true; // Show keypoint linelengths, names.
var bodypartdebug = true; // Show object names.


type Coord = {
  x: number;
  y: number;
};
type Position = {
  position: Coord;
};
type BodyPartProps = {
  name: string;
  origin: Coord;
  angle: number;
  linelength: number;
};
type KeyPointDotProps = {
  name: string;
  position: Coord;
  angle?: number;
  width?: number;
  height?: number;
};

type CircleBodyPartProps = {
  name: string;
  center: Coord;
  r: number;
  color?: string;
};

const CircleBodyPart: React.FC<CircleBodyPartProps> = ({
  center,
  r,
  color = "red",
}: CircleBodyPartProps) => {
  return (
    <circle cx={center.x} cy={center.y} r={r} fill={color} stroke={"black"} />
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
        transform={`${position.x + 10}, ${position.y + 20})`} // Rotate around the center of the rectangle
        fill="black"
        stroke="black"
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

const RectBodyPartOld: React.FC<BodyPartProps> = ({
  // CenterAtKeyPoint
  name,
  origin,
  angle,
  linelength,
}: BodyPartProps) => {
  // Calculate the distance between the origin and the end point of the line
  const width = 50; // Example width of the rectangle
  const height = 30; // Example height of the rectangle
  const distance = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

  // Use the calculated distance as the width of the rectangle
  const rectWidth = distance;

  // Calculate center coordinates of the rectangle
  const centerX = origin.x;
  const centerY = origin.y;

  return (
    <>
      <rect
        x={centerX - rectWidth / 2} // Adjusted to center the rectangle based on the new width
        y={centerY - height / 2} // Adjusted to center the rectangle vertically
        width={rectWidth}
        height={height}
        transform={`rotate(${angle}, ${centerX}, ${centerY})`} // Rotate around the center of the rectangle
        fill="red"
        stroke="black"
      />
      {bodypartdebug && (
        <text
          fontSize={10}
          x={origin.x}
          y={origin.y - 20}
          style={{ textDecoration: "underline" }}
        >
          {name}
        </text>
      )}
    </>
  );
};

const RectBodyPart: React.FC<BodyPartProps> = ({
  // CenterAtKeyPoint with length.
  name,
  origin,
  angle,
  linelength,
}: BodyPartProps) => {
  const aspectRatio = 1 / 4;
  const calcwidth = linelength * aspectRatio;
  const calclength = Math.sqrt(
    Math.pow(calcwidth, 2) + Math.pow(linelength, 2)
  );

  const rectLength = calclength;
  const rectWidth = calcwidth;
  const centerX = origin.x;
  const centerY = origin.y;

  return (
    <>
      <rect
        x={centerX} // Adjusted to center the rectangle based on the new width
        y={centerY - rectWidth / 2} // Adjusted to center the rectangle vertically
        width={linelength}
        height={rectWidth}
        transform={`rotate(${angle}, ${centerX}, ${centerY})`} // Rotate around the center of the rectangle
        fill="red"
        stroke="black"
      />
      {bodypartdebug && (
        <text
          fontSize={10}
          x={origin.x}
          y={origin.y - 20}
          style={{ textDecoration: "underline" }}
        >
          {name}
        </text>
      )}
    </>
  );
};

const RectBodyPartB: React.FC<BodyPartProps> = ({
  // Shifted Origin
  name,
  origin,
  angle,
}: BodyPartProps) => {
  // Calculate the distance between the origin and the end point of the line
  const width = 50; // Example width of the rectangle
  const height = 30; // Example height of the rectangle
  const distance = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

  // Use the calculated distance as the width of the rectangle
  const rectWidth = distance;

  // Calculate center coordinates of the rectangle
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <>
      <text fontSize={10} x={origin.x} y={origin.y - 20}>
        {name}
      </text>
      <rect
        x={origin.x + centerX - rectWidth / 2} // Adjusted to center the rectangle based on the new width
        y={origin.y + centerY - height / 2} // Adjusted to center the rectangle vertically
        width={rectWidth}
        height={height}
        transform={`rotate(${angle}, ${origin.x + centerX}, ${
          origin.y + centerY
        })`} // Rotate around the center of the rectangle
        fill="red"
        stroke="black"
      />
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
        fill={"red"}
        stroke={"black"}
      ></polygon>
      {/* Use BodyPart component for each body part */}
      ))
      <CircleBodyPart
        name="rightEar"
        center={keypoints.rightEar.position}
        r={16}
      />
      <CircleBodyPart
        name="leftEar"
        center={keypoints.leftEar.position}
        r={16}
      />
      <CircleBodyPart
        name="head"
        center={keypoints.nose.position}
        r={distanceNoseToEar}
      />
      <CircleBodyPart
        name="nose"
        center={keypoints.nose.position}
        r={8}
        color="yellow"
      />
      <CircleBodyPart
        name="leftEye"
        center={keypoints.leftEye.position}
        r={8}
        color="white"
      />
      <CircleBodyPart
        name="rightEye"
        center={keypoints.rightEye.position}
        r={8}
        color="white"
      />
      <CircleBodyPart name="leftHand" center={leftHand.position} r={11} />
      <CircleBodyPart name="rightHand" center={rightHand.position} r={11} />
      <CircleBodyPart name="leftFoot" center={leftFoot.position} r={15} />
      <CircleBodyPart name="rightFoot" center={rightFoot.position} r={15} />
      <RectBodyPart
        name="leftUpperArm"
        origin={leftShoulder.position}
        angle={calculateAngle(leftShoulder.position, leftElbow.position)}
        linelength={Math.sqrt(
          Math.pow(leftElbow.position.x - leftShoulder.position.x, 2) +
            Math.pow(leftElbow.position.y - leftShoulder.position.y, 2)
        )}
      />
      <RectBodyPart
        name="rightUpperArm"
        origin={rightShoulder.position}
        angle={calculateAngle(rightShoulder.position, rightElbow.position)}
        linelength={calculateDistance(
          rightShoulder.position,
          rightElbow.position
        )}
      />
      <RectBodyPart
        name="leftLowerArm"
        origin={leftElbow.position}
        angle={calculateAngle(leftElbow.position, leftHand.position)}
        linelength={calculateDistance(leftElbow.position, leftHand.position)}
      />
      <RectBodyPart
        name="rightLowerArm"
        origin={rightElbow.position}
        angle={calculateAngle(rightElbow.position, rightHand.position)}
        linelength={calculateDistance(rightElbow.position, rightHand.position)}
      />
      <RectBodyPart
        name="leftFemur"
        origin={leftHip.position}
        angle={calculateAngle(leftHip.position, leftKnee.position)}
        linelength={calculateDistance(leftHip.position, leftKnee.position)}
      />
      <RectBodyPart
        name="rightFemur"
        origin={rightHip.position}
        angle={calculateAngle(rightHip.position, rightKnee.position)}
        linelength={calculateDistance(rightHip.position, rightKnee.position)}
      />
      <RectBodyPart
        name="leftShin"
        origin={leftKnee.position}
        angle={calculateAngle(leftKnee.position, leftFoot.position)}
        linelength={calculateDistance(leftKnee.position, leftFoot.position)}
      />
      <RectBodyPart
        name="rightShin"
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
