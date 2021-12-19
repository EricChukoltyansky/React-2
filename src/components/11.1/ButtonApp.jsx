import React from "react";
import Btn from "./Button";
// import "./styles.css";

const colors = [
  { color: "blue", id: 0 },
  { color: "red", id: 1 },
  { color: "yellow", id: 2 },
  { color: "green", id: 3 },
];

const ButtonApp = () => {
  const [selectedColor, setSelectedColor] = React.useState("");

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>The color selected is : {selectedColor}</h1>
      {colors.map((btn) => {
        return (
          <Btn
            callBack={updateColor}
            id={btn.id}
            key={btn.id}
            color={btn.color}
          />
        );
      })}
    </div>
  );
};

export default ButtonApp;
