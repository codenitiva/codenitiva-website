import React from "react";
import { CardProps } from "./Card.type";
import Icon from "../Icon/Icon";
import images from "../../variables/images";

const Card : React.FC<CardProps> = ({
  position,
  picture,
  name,
  iconType,
  iconURL
}) => {
  return (
    <div className="flex flex-col items-center justify-center transition transform duration-200 relative w-64 shadow-card hover:shadow-lg hover:scale-105 rounded-lg">
      <div className="absolute top-0 left-0">
        <img
          className="w-64"
          src={images('card-vector')}
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
        <small>{position}</small>
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
