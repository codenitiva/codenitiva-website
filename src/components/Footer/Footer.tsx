import React from "react";
import "../../styles/main.output.css";
import {
  learnShareItemsLabel,
  moreItemsLabel,
  socialMediaTypes,
  socialMediaURL
} from "./Footer.const";
import { Icon } from "../Icon/Icon";

const Footer : React.FC = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row lg:justify-around bg-footer">
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <div className="footer-header">LEARN & SHARE</div>
        {learnShareItemsLabel.map(({ label, path }, index) => (
          <a
            key={`#footer-items${label}-${index}`}
            className="footer-text"
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <div className="footer-header">MORE</div>
        {moreItemsLabel.map(({ label, path }, index) => (
          <a
            key={`#footer-items${label}-${index}`}
            className="footer-text"
            href={path}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <div className="footer-header">SOCIAL MEDIAS</div>
        <div className="flex flex-row justify-center items-center">
          {socialMediaTypes.map((type, index) => (
            <Icon
              key={`#icon-${type}-${index}`}
              icon={type}
              link={socialMediaURL[index]}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <a href="/">
          <img
            className="w-48 lg:w-56"
            src={require("../../assets/brand/Codenitiva.svg")}
            alt="This is Codenitiva"
          />
        </a>
        <div className="text-xs lg:text-sm font-content text-dark my-1">
          Copyright © Codenitiva, Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
