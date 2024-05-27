import React, { useEffect, useState } from 'react';
import { Keypoint, Line, BoneOverlay } from "./Comps";

// Define the component
export default function KeypointsWithSVG() {
    // State to keep track of keypoints
    const [keypoints, setKeypoints] = useState([
        { name: "kp1", x: 100, y: 100, connections: ["kp2", "kp3", "kp4"] },
        { name: "kp2", x: 150, y: 150, connections: ["kp1", "kp3", "kp4"] },
        { name: "kp3", x: 200, y: 200, connections: ["kp1", "kp2"] },
        { name: "kp4", x: 250, y: 250, connections: ["kp1", "kp2"] },
        { name: "kp5", x: 300, y: 300, connections: ["kp1", "kp4"] }
    ]);

    // Effect to move keypoints while keeping lines the same length
    useEffect(() => {
        const interval = setInterval(() => {
            setKeypoints(prevKeypoints => {
                return prevKeypoints.map(keypoint => {
                    const connectedKeypointName = keypoint.connections[Math.floor(Math.random() * keypoint.connections.length)];
                    const connectedKeypoint = prevKeypoints.find(kp => kp.name === connectedKeypointName);
                    if (!connectedKeypoint) return keypoint;

                    const currentDistance = Math.sqrt((keypoint.x - connectedKeypoint.x) ** 2 + (keypoint.y - connectedKeypoint.y) ** 2);
                    const fraction = 5 / currentDistance;
                    const newX = keypoint.x + (connectedKeypoint.x - keypoint.x) * fraction;
                    const newY = keypoint.y + (connectedKeypoint.y - keypoint.y) * fraction;
                    const clampedX = Math.max(0, Math.min(500, newX));
                    const clampedY = Math.max(0, Math.min(500, newY));

                    return { ...keypoint, x: clampedX, y: clampedY };
                });
            });
        }, 1000 / 6);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <svg id="svg-container" width="500" height="500" style={{ position: 'relative' }}>
            {keypoints.map(keypoint => (
                keypoint.connections.map(connection => {
                    const connectedKeypoint = keypoints.find(kp => kp.name === connection);
                    if (connectedKeypoint) {
                        return <Line key={`${keypoint.name}-${connection}`} x1={keypoint.x} y1={keypoint.y} x2={connectedKeypoint.x} y2={connectedKeypoint.y} />
                    }
                    return null;
                })
            ))}
            {keypoints.map(keypoint => (
                <Keypoint key={keypoint.name} x={keypoint.x} y={keypoint.y} />
            ))}
            <BoneOverlay x={keypoints[0].x} y={keypoints[0].y} />
        </svg>
        </>
    );
}
