import React from "react";
import { IconProps } from "./Icon.type";
import icons from "../../variables/icons";

const Icon: React.FC<IconProps> = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="footer-icon mr-2"
        src={icons(icon)}
        alt={icon}
      />
    </a>
  );
};

export default Icon;
