
import React from 'react'
import { transform } from '@svgr/core'
import { useState } from 'react'

// Week 5 /6 / 7?

/// Deze testomgeving is bedoeld als svgr en svgo samen te voegen maar
/// het blijkt dat hiervoor al een lib bestaat

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`

const jsCode = await transform(
  svgCode,
  { plugins: ['@svgr/plugin-svgo'], icon: true,  typescript: true},
  { componentName: 'MyComponent' },
)
    // State voor positie
/*
import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={1} {...props}>
    <title>{"Rectangle 5"}</title>
    <path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
  </svg>
)
export default SvgComponent*/

const initialPosition = [10,10]

// State voor positie
const [position, setPosition] = useState(initialPosition);

// State voor rotatie
const [rotation, setRotation] = useState(0);

// State voor schaal
const [scale, setScale] = useState(null);