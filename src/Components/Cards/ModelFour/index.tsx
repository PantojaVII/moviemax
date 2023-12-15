import { Link } from "react-router-dom";
import CardModelFourStyled from "./CardModelFourStyled";
import { BsFillStarFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import ISeries from "../../../Interfaces/ISeries";
import IEpisodes from "../../../Interfaces/IEpisodes";

interface CardModelFourProps {
  img?: string,
  serie?: ISeries;
  episode?: IEpisodes;
  children?: React.ReactNode;
  width?: string;
}

export default function CardModelFour({
  img,
  serie,
  children,
  episode,
  width = "150px",
}: CardModelFourProps) {


  return (
    <CardModelFourStyled
      id="CardModelTwoStyled"
      width={width}

    >
      <div className="CardModelFour-movie">
        <img src={img} alt={episode?.name} />
        <div className="CardModelFour-info">
          <span>{episode?.name}</span>
          <span> Episódio {episode?.num_episode}</span>
        </div>
      </div>
    </CardModelFourStyled >
  );
}
