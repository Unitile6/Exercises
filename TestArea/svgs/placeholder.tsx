import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 297 297" 
    {...props}
    width={"80px"}
    height={"80px"}
  >
    <path d="M281.991 133.496h-13.445c-6.8-54.74-50.31-98.25-105.05-105.05V15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v13.446c-54.74 6.8-98.25 50.31-105.05 105.05H15.001c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h13.445c6.8 54.74 50.31 98.25 105.05 105.05v13.445c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-13.445c54.74-6.8 98.25-50.31 105.05-105.05h13.445c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zM163.496 238.232V191c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v47.232c-38.172-6.36-68.376-36.564-74.736-74.736h47.231c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15H58.76c6.36-38.172 36.564-68.376 74.736-74.736v47.231c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V58.76c38.172 6.36 68.376 36.564 74.736 74.736h-47.231c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h47.231c-6.36 38.172-36.565 68.376-74.736 74.736z"></path>
    <rect x="0" y="0" width="297" height="297" fill="none" stroke="black" stroke-width="4" />
  </svg>
);

export default SvgComponent;
