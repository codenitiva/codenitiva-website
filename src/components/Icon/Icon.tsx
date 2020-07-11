import React from "react";
import { IconProps } from "./Icon.type";
import images from "../../variables/images";

export const Icon: React.FC<IconProps> = ({ link, icon }) => {
  return (
    <a href={link}>
      <img
        className="footer-icon mr-2"
        src={images(icon)}
        alt={icon}
      />
    </a>
  );
};
