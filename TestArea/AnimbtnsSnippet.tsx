import React from "react"
import { useState ,useRef} from "react"
import {Button} from "@mui/material"
import {Btns} from "../TestArea/SenderButtons"
import {Arm, Leg} from "./SVGFiles"
// Various weeks... Vooral display v subCompos.

type SelectedElement = "arm" | "leg" | null;
export default function part(){
    
    const svgRef = useRef<SVGElement>(null);
    const [selectedElement, setSelectedElement] = useState<SelectedElement>(null);
    const [translation, setTranslation] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState({ x: 1, y: 1 });

    const handleElementClick = (element: SelectedElement) => {
        setSelectedElement(element);
      };

    const handleTranslationChange = (newValue: string) => {
        // Parse newValue and update translation state
        // Example: newValue could be "10 20"
        const [x, y] = newValue.split(" ").map(parseFloat);
        setTranslation({ x, y });
      };
    
      const handleRotationChange = (newValue: string) => {
        // Parse newValue and update rotation state
        // Example: newValue could be "45"
        setRotation(parseFloat(newValue));
      };
    
      const handleScaleChange = (newValue: string) => {
        // Parse newValue and update scale state
        // Example: newValue could be "1.5 1.5"
        const [x, y] = newValue.split(" ").map(parseFloat);
        setScale({ x, y });
      };
    
      console.log(translation)
      console.log(rotation)
      console.log(scale)

      //svgRef.current = S1;
    return(
    <>
    <div className="border solid-2 shadow 4" style={{}}>
          <Btns
      selectedElement={selectedElement}
        onTranslationChange={handleTranslationChange}
        onRotationChange={handleRotationChange}
        onScaleChange={handleScaleChange}
        
      />
      </div>
        <p>This is a testing area</p>
        <Arm
        transform={`translate(${translation.x}, ${translation.y}) rotate(${rotation}) scale(${scale.x}, ${scale.y})`}
        width={40}
        height={40}
      />
      <Leg
        transform={`translate(${translation.x}, ${translation.y}) rotate(${rotation}) scale(${scale.x}, ${scale.y})`}
        width={40}
        height={40}
      />
    </>)
}