import React from "react";
import Button from "../6.1/Button";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button styleWithProps="btn bold" text="important" />
        <Button styleWithProps="btn" text="not Important"/>
      </>
    );
  }
}

export default Buttons;
