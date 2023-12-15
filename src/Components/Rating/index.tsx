import React from "react";
import { RatingStyled } from "./RatingStyled";
import { BsFillStarFill } from "react-icons/bs";
 

interface RatingProps {
  value: string | undefined;
}

const Rating: React.FC<RatingProps> = ({ value }) => (
  <RatingStyled>
    <BsFillStarFill/><p>{value}</p>
  </RatingStyled>
);

export default Rating;