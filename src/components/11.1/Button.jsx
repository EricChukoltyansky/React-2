import React from "react";

const Btn = ({ color, callBack, id }) => {
  return (
    <div>
      <button
        onClick={(e) => callBack(e.target.textContent)}
        style={{
          color: "white",
          background: color,
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        {color}
      </button>
    </div>
  );
};

export default Btn;
