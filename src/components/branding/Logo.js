import React from "react"

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    style={{
      enableBackground: "new 0 0 192 192",
    }}
    xmlSpace="preserve"
    
    height={props.height || "3rem"}
    fill={props.fill || "#16324F"}
    stroke={props.stroke || "#16324F"}
  >
<rect style={{display:"none"}} width="192" height="192"/>
<path style={{fill:"none", strokeWidth:"20", strokeLinecap:"round", strokeMiterlimit:"10"}} d="M132.3,75.7l3.7-3.2c5.7-4.9,3.9-12.4-3.7-15.5l-32-13.1c-5.5-2.3-12.4-1.4-16.6,2.2L56,69.4
	c-5.9,4.9-3.9,12.7,4,15.7l69.1,26.3c8.6,3.3,10,12,2.6,16.7l-29.3,18.7c-4.1,2.6-9.9,3.2-14.7,1.4l-25.2-9.1
	c-8.7-3.1-10.3-11.8-3.1-16.6l4.6-3"/>
  </svg>
)

export default Logo