import React from "react";
import { CardStyle, BeyImage } from './styles';


const BeyCard = ({name, img}) => {
  return (
    <CardStyle>
      <BeyImage src={img} alt={name}/>
      <h3 className="bey-header">{name}</h3>
    </CardStyle>
  );
};

export default BeyCard;
