import React from "react";
import {CardProps} from "./CardProps";
import "./Card.css";
export const Card = ({title, value, image, width, height} : CardProps) => {
  const imagen = image ? image : "https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc";
  const widthImage = width ? width : "100%";
  const heightImage = height ? height : "auto";
  return (
    <div className="card-main">
      <div className="card-image">
        <img
          src={imagen}
          alt={`Imagen sobre ${title}`}
          width={widthImage}
          height={heightImage}
        />
      </div>
      <div className="card-info">
        <h1>{title}</h1>
        <span>{value}</span>
      </div>
    </div>
  );
};
