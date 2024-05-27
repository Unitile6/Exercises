import * as React from "react"
import { SVGProps } from "react"
import {motion} from "framer-motion"
const GitCatSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    //width={800} // Comment out to make it scale to the container.
    //height={800}
    viewBox="0 0 17 17"
    {...props}
  >
    <path d="M13.077 11.115c0 .746-.389 1.962-1.308 1.962-.92 0-1.309-1.216-1.309-1.962 0-.745.389-1.962 1.309-1.962s1.308 1.217 1.308 1.962M5.231 9.153c-.919 0-1.308 1.217-1.308 1.962 0 .746.389 1.962 1.308 1.962s1.308-1.216 1.308-1.962c0-.745-.389-1.962-1.308-1.962M17 9.317c0 1.135-.112 2.34-.623 3.382-1.349 2.728-5.057 2.993-7.713 2.993-2.697 0-6.63-.234-8.03-2.993C.112 11.667 0 10.452 0 9.317c0-1.492.409-2.901 1.39-4.045a5.6 5.6 0 0 1-.276-1.738c0-.766.173-1.531.521-2.227 1.614 0 2.646.705 3.872 1.665a13.7 13.7 0 0 1 3.157-.357c.96 0 1.931.103 2.861.327 1.216-.95 2.247-1.635 3.841-1.635.348.695.521 1.461.521 2.227 0 .583-.092 1.165-.276 1.717C16.592 6.405 17 7.825 17 9.317m-2.289 1.798c0-1.563-.949-2.942-2.615-2.942-.674 0-1.317.123-1.992.215-.531.082-1.062.112-1.604.112s-1.073-.03-1.604-.112c-.664-.092-1.318-.215-1.992-.215-1.665 0-2.615 1.379-2.615 2.942 0 3.126 2.86 3.606 5.353 3.606h1.717c2.493.001 5.352-.48 5.352-3.606" />
  </svg>
)
export default GitCatSvg
//{ GitCatSvg as ReactComponent }