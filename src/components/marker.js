import React from "react";
import "./marker.css";

const Marker = ({ text, selected }) => {
  const classes = `marker${selected ? " selected" : ""}`;
  console.log(`Marker: ${text}, Selected: ${selected}`); // Debug log

  return (
    <div className={classes}>
      $ {text}
    </div>
  );
};

export default Marker;
