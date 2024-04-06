import React from 'react'
import { useState } from 'react'
import './styles/Button.css'

function Button(props) {
  const [labelClr, setLabelClr] = useState("var(--primaryColour1)")
  const [bgColor, setBgColor] = useState("var(--primaryColour2)")

  let Label = props.Label

  let btnstyle = {
    //all: "unset",
    backgroundColor: props.disabled ? "var(--secondaryColour2)" : bgColor,
    color: props.disabled ? "var(--highlightColour2)" : labelClr,
    padding: "8px 16px 8px 16px",
    borderRadius: "16px",
    width: `${props.size === "sm" ? "clamp(120px, 38vw, 169px)" : "clamp(120px, 100%, 200px)" }`,
    hieght: "clamp(40px,100%, 48px)",
    textAlign: "center",
    justifySelf: "center",
    whiteSpace: "nowrap",
    fontSize: "clamp(16px, 2vw, 24px)",
  }

  const handleClick = () => {
    setBgColor("var(--secondaryColour1)");
    setLabelClr("var(--primaryColour1)");
    props.clickFn(props.clickFnD)
    // navigate(destination);
  };
  const handleMouseEnter = () => {
    setBgColor("var(--primaryColour1)");
    setLabelClr("var(--primaryColour2)");
  };
  const handleMouseLeave = () => {
    setBgColor("var(--primaryColour2)")
    setLabelClr("var(--primaryColour1)");
  };

  return (
    <button
      id='ExampleButton'
      type='button'
      disabled={props.disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='LeadText'
      style={btnstyle}
      >
        {Label}
    </button>
  )
}

export default Button