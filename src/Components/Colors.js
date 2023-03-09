import React from "react";
import { useContext } from "react";
import { myContext } from "../App";

const Colors = () => {
  const data = useContext(myContext);
  return (
    <div className="colors">
      <h1 style={{ backgroundColor: data.color }}>Color</h1>
    </div>
  );
};

export default Colors;
