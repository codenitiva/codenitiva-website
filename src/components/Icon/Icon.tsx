import React from "react";
import { IconProps } from "./Icon.type";
import images from "../../variables/images";

const Icon: React.FC<IconProps> = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="footer-icon mr-2"
        src={images(icon)}
        alt={icon}
      />
    </a>
  );
};

export default Icon;
