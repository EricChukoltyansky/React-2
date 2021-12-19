import "./Boxes.css";
import React from "react";
import Boxes from "./components/8.2/Box1";

function BoxesApp() {
  return (
    <>
      <Boxes width="200px" height="200px" />
      <Boxes width="100px" height="100px" />
      <Boxes width="75px" height="75px" />
    </>
  );
}

export default BoxesApp;
