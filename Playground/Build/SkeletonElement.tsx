import React from "react";
import Anchor from "./Anchor"
import ImgFile from "./ImgFile"

class SkeletonElement {
    // Can be used for both legs and arms, doubled.
    primaryAnchor: Anchor;      // Anchor to
    secondaryAnchor?: Anchor;   // Anchor from, which won't have a connection.
    graphic: ImgFile;           // Image file
}
class HeadElement {
    anchor: Anchor;             // Anchor to
    graphic: ImgFile;           // Image file
}
class BodyElement {
    leftArmAnchor: Anchor;      // LArm
    rightArmAnchor: Anchor;     // RArm
    leftLegAnchor: Anchor;      // LLeg
    rightLegAnchor: Anchor;     // RLeg
    headAnchor: Anchor;         // Head
    graphic: ImgFile;           // Image file  
}

class Skeleton {
    head: HeadElement
    
}