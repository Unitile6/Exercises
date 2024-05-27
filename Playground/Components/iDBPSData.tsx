import React, { useEffect, useState } from 'react';

// Define the function to create a keypoint
export function createKeypoint(name: string, x: number, y: number, connections: string[]) {
    return {
        name: name,
        coordinates: { x: x, y: y },
        connections: connections
    };
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

    // Effect to move keypoints randomly
    useEffect(() => {
        const interval = setInterval(() => {
            setKeypoints(prevKeypoints => {
                return prevKeypoints.map(keypoint => {
                    // Random movement within a range of -5 to +5 pixels on both x and y axes
                    const deltaX = Math.floor(Math.random() * 11) - 5;
                    const deltaY = Math.floor(Math.random() * 11) - 5;

                    // Ensure the dots do not go out of screen
                    const newX = Math.max(0, Math.min(500, keypoint.coordinates.x + deltaX));
                    const newY = Math.max(0, Math.min(500, keypoint.coordinates.y + deltaY));

                    // Return a copy of the keypoint with updated coordinates
                    return {
                        ...keypoint,
                        coordinates: {
                            x: newX,
                            y: newY
                        }
                    };
                });
            });
        }, 1000 / 6); // Move 5 pixels every 1/6th of a second

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
