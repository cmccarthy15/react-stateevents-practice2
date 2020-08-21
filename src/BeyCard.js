import React from "react";

const BeyCard = ({name, img}) => {
  return (
    <div className="bey-card">
      <img className="bey-image" src={img} alt={name}/>
      <h3 className="bey-header">{name}</h3>
    </div>
  );
};

export default BeyCard;
