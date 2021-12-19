import React from "react";
import "./q1Input.css";

function Q1Input() {
  return (
    <>
      <input type="range" name="likeness" id="likeness" min="0" max="100" />
      <div></div>
    </>
   );
}

export default Q1Input;
