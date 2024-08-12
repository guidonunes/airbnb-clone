import React from "react";
import "./flat.css";

const Flat = ({ flat, selectFlat }) => {
  const handleClick = () => {
    // Call the parent method selectFlat
    selectFlat(flat);
  };

  const title = `${flat.price} ${flat.priceCurrency} - ${flat.name}`;
  const style = {
    backgroundImage: `url('${flat.imageUrl}')`,
  };

  return (
    <div className="flat" onClick={handleClick}>
      <div className="flat-picture" style={style}></div>
      <div className="flat-title">
        {title}
      </div>
    </div>
  );
};

export default Flat;
