import React, { SyntheticEvent, useState } from 'react';
import { Button } from '@mui/material';

// Week 7 / 8

type Props = {
  onChange: SyntheticEvent
}

const AnimationControls = ({onChange}: Props) => {

  const [animation, setAnimation] = useState({
    rotate: 0,
    x: 3,
    y: 0
  });

  const [transition, setTransition] = useState({
    times: [0, 1],
    duration: 2,
    repeat: Infinity,
    type: "keyframes",
    ease: "easeInOut"
  });

  const notifyUpdate = new CustomEvent('custom:notifyUpdate', {
    cancelable: true, 
    bubbles: true, 
    //detail: {name: "cat"},
    detail: {ARSet: animation, TRSet: transition}

    })
  


  const handleAnimationChange = (property: string, value: number | string) => {
    setAnimation(prevAnimation => ({
      ...prevAnimation,
      [property]: value
    }));
    handleUpdate();
  };

  const handleTransitionChange = (property: string, value: number | string) => {
    setTransition(prevTransition => ({
      ...prevTransition,
      [property]: value
    }));
    handleUpdate();
  };

  const handleUpdate = () => {
    document.dispatchEvent(notifyUpdate)
    console.log("handleUpdate called from handletransitionChange")
  };
  
  document.addEventListener('custom:notifyUpdate', (e) => {
    const customEvent = e as CustomEvent;
    console.log("update called from internal eventlistener", customEvent.detail)
  })

  return (
    <div style={{ border: "1px solid black", padding: "10px", display: "flex", flexDirection: "row" }}>
        <label>2 objecten: animate en transition. Update bij waardeverandering als obj. |</label>
      {/* Animation Controls */}
      <div style={{ marginRight: "20px" }}>
        <h2>Animation Controls</h2>
        {/* Add animation control inputs here */}
        <h2>Animation Controls</h2>
      <div>
        <h3>Rotate</h3>
        <input
          type="range"
          min="0"
          max="360"
          value={animation.rotate}
          onChange={e => handleAnimationChange('rotate', parseInt(e.target.value))}
        />
        <span>{animation.rotate}</span>
      </div>
      <div>
        <h3>X</h3>
        <input
          type="range"
          min="0"
          max="10"
          value={animation.x}
          onChange={e => handleAnimationChange('x', parseInt(e.target.value))}
        />
        <span>{animation.x}</span>
      </div>
      <div>
        <h3>Y</h3>
        <input
          type="range"
          min="0"
          max="10"
          value={animation.y}
          onChange={e => handleAnimationChange('y', parseInt(e.target.value))}
        />
        <span>{animation.y}</span>
      </div>
      </div>
      {/* Transition Controls */}
      <div>
        <h2>Transition Controls</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <h3>Type</h3>
            <select
              value={transition.type}
              onChange={e => handleTransitionChange('type', e.target.value)}
            >
              <option value="tween">Tween</option>
              <option value="spring">Spring</option>
              <option value="inertia">Inertia</option>
              <option value="keyframes">Keyframe</option>
            </select>
          </div>
          <div>
            <h3>Ease</h3>
            <select
              value={transition.ease}
              onChange={e => handleTransitionChange('ease', e.target.value)}
            >
              <option value="easeInOut">easeInOut</option>
              {/* Add other framer-motion easing patterns as options */}
            </select>
          </div>
          {/* Add controls for other transition properties if needed */}
        </div>
      </div>

      {/* Update Button
      <Button variant="outlined" onClick={handleUpdate}>Update</Button>*/}
    </div> 

  );
  }


export default AnimationControls;
