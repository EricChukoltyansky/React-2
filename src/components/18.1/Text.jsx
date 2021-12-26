import React from "react";
import "./Text.css";

function Text({ children, textSize, text }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      <div className="container">{text}</div>
      {isReadMore ? text.slice(0, { textSize }) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : "show less"}
      </span>
    </div>
  );
}

export default Text;
