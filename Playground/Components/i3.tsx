import React, { useEffect, useState } from 'react';

type Keypoint = {
    name: string;
    x: number;
    y: number;
    connections: string[];
}

// Define the function to create a keypoint
export function createKeypoint(name:string = "kp"+Math.random().toString, x:number, y:number, connections:string[] = []) {
    return {
        name: name,
        coordinates: { x: x, y: y },
        connections: connections
    };
}

// Calculate distance between two points
function distance(point1: { x: number, y: number }, point2:{ x: number, y: number }) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Define the component
export function KeypointsWithSVG() {
    // State to keep track of keypoints
    const [keypoints, setKeypoints] = useState([
        createKeypoint("kp1", 100, 100, ["kp2", "kp3", "kp4"]),
        createKeypoint("kp2", 150, 150, ["kp1", "kp3", "kp4"]),
        createKeypoint("kp3", 200, 200, ["kp1", "kp2"]),
        createKeypoint("kp4", 250, 250, ["kp1", "kp2"]),
        createKeypoint("kp5", 300, 300, ["kp1", "kp4"]) // Added new keypoint with connections
    ]);

    // Effect to move keypoints while keeping lines the same length
    useEffect(() => {
        const interval = setInterval(() => {
            setKeypoints(prevKeypoints => {
                return prevKeypoints.map(keypoint => {
                    // Choose one of the connected keypoints randomly
                    const connectedKeypointName = keypoint.connections[Math.floor(Math.random() * keypoint.connections.length)];
                    const connectedKeypoint = prevKeypoints.find(kp => kp.name === connectedKeypointName);
                    if (!connectedKeypoint) return keypoint;

                    // Calculate distance between current and connected keypoints
                    const currentDistance = distance(keypoint.coordinates, connectedKeypoint.coordinates);
                    
                    // Move the current keypoint by a fraction of the distance towards the connected keypoint
                    const fraction = 5 / currentDistance;
                    const newX = keypoint.coordinates.x + (connectedKeypoint.coordinates.x - keypoint.coordinates.x) * fraction;
                    const newY = keypoint.coordinates.y + (connectedKeypoint.coordinates.y - keypoint.coordinates.y) * fraction;

                    // Ensure the new coordinates stay within the SVG boundaries
                    const clampedX = Math.max(0, Math.min(500, newX));
                    const clampedY = Math.max(0, Math.min(500, newY));

                    // Return a copy of the keypoint with updated coordinates
                    return {
                        ...keypoint,
                        coordinates: {
                            x: clampedX,
                            y: clampedY
                        }
                    };
                });
            });
        }, 1000 / 6); // Move keypoints every 1/6th of a second

        // Clean up on unmount
        return () => clearInterval(interval);
    }, []);

    // JSX for rendering the component
    return (
        <svg id="svg-container" width="500" height="500">
            {/* Draw lines between specified connections */}
            {keypoints.map(keypoint => (
                keypoint.connections.map(connection => {
                    const connectedKeypoint = keypoints.find(kp => kp.name === connection);
                    if (connectedKeypoint) {
                        return <line key={`${keypoint.name}-${connection}`} x1={keypoint.coordinates.x} y1={keypoint.coordinates.y}
                            x2={connectedKeypoint.coordinates.x}
                            y2={connectedKeypoint.coordinates.y}
                            style={{ stroke: "black", strokeWidth: 2 }} />
                    }
                    return null;
                })
            ))}

            {/* Draw keypoints as circles */}
            {keypoints.map(keypoint => (
                <circle key={keypoint.name} id={keypoint.name} cx={keypoint.coordinates.x} cy={keypoint.coordinates.y} r="5" fill="red" />
            ))}
        </svg>
    );
}
