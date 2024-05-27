import React, {useState, useRef} from "react"

// Week 1 - 3 / 4?

// Keep typescript happy
type SelectedElement = "arm" | "leg" | null;
type TranslationHandler = (newValue: string) => void;
type RotationHandler = (newValue: string) => void;
type ScaleHandler = (newValue: string) => void;

type Props = {
    selectedElement: SelectedElement;
    onTranslationChange: TranslationHandler;
    onRotationChange: RotationHandler;
    onScaleChange: ScaleHandler;
  };
  
  export function Btns({
    selectedElement,
    onTranslationChange,
    onRotationChange,
    onScaleChange
  }: Props){
    const [selectedSVG, setselectedSVG] = useState(null);

    return (<>
    <p>
        <label> Selected Element: </label>
        <label> {selectedSVG} </label>
    </p>
    <p>
        <label> Translation: (x / y) </label>
        <input className="border p-2 " width={40} onChange={(e) => onTranslationChange(e.target.value)}></input>
        <input className="border p-2" width={40}></input>
        <button name="UseMe">Send</button>
    </p>
    <p>
        <label> Rotation: (degrees)</label>
        <input className="border p-2" width={80}></input>
        <button name="UseMe">Send</button>
    </p>
    <p>
        <label> Scale: (scale x : y)</label>
        <input className="border p-2" width={80}></input>
        <button name="UseMe">Send</button>
    </p>
    </>)
}