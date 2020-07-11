import React from "react";
import { CardProps } from "./Card.type";
import { Icon } from "../Icon/Icon";

const Card : React.FC<CardProps> = ({
  position,
  picture,
  name,
  iconType,
  iconURL
}) => {
  return (
    <div className="flex flex-col items-center justify-center relative w-64 shadow-card rounded-lg">
      <div className="absolute top-0 left-0">
        <img
          className="w-64"
          src={require("../../assets/vector/card-vector.svg")}
          alt="Card Vector"
        />
      </div>
      <div className="mt-8 z-10">
        <img
          className="w-32 rounded-full"
          src={picture}
          alt="A person"
        />
      </div>
      <div className="mr-1 align-center">
        <h2>{name}</h2>
      </div>
      <div className="align-center">
        <p>{position}</p>
      </div>
      <div className="flex flex-row items-center justify-center mt-4 mb-8">
        {iconType.map((type, index) => (
          <Icon
            key={`#icon-${type}-${index}`}
            icon={type}
            link={iconURL[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
