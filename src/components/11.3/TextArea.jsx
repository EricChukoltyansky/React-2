import React from "react";
import "./Input.css";
const TextArea = ({ textValue, labelName,id }) => {
  return (
    <>
      <label>{labelName}</label>
      <textarea value={textValue} id={id} />
    </>
  );
};

export default TextArea;
