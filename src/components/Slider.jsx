import React from "react";
import { useState } from "react";

export const Slider = () => {
  const [num, setNum] = useState(0);
  const change = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <div className="flex flex-row">
        <input
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="10"
          value={num}
          onChange={change}
        />
        <input value={num} onChange={change} />
      </div>
    </>
  );
};
