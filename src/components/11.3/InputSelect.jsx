import React from "react";

const SelectInputComponent = ({ ages, id }) => {
  return (
    <>
      <select id={id}>
        {ages.map((age) => {
          return <option value={age.age}>{age.age}</option>;
        })}
      </select>
    </>
  );
};

export default SelectInputComponent;
