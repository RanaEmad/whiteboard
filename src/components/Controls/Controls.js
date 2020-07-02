import React from "react";
import "./Controls.css";
import Color from "../Color/Color";

function Controls(props) {
  return <div className="controls">
      <Color handleColor={props.handleColor} />
  </div>;
}

export default Controls;
