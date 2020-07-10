import React from "react";
import "../../styles/main.output.css";

export const Footer : React.FC = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row lg:justify-around bg-footer">
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <div className="footer-header">LEARN & SHARE</div>
        <div className="footer-text">News</div>
        <div className="footer-text">Blog</div>
        <div className="footer-text">Forum</div>
      </div>
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <div className="footer-header">MORE</div>
        <div className="footer-text">Contact Us</div>
      </div>
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <div className="footer-header">SOCIAL MEDIAS</div>
        <div className="flex flex-row justify-center items-center">
          <img
            className="footer-icon mr-2"
            src={require("../../assets/social/github.svg")}
          />
          <img
            className="footer-icon mr-2"
            src={require("../../assets/social/linkedin.svg")}
          />
          <img
            className="footer-icon mr-2"
            src={require("../../assets/social/slack.svg")}
          />
          <img
            className="footer-icon"
            src={require("../../assets/social/facebook.svg")}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start my-4 lg:my-8 mx-8">
        <img
          className="w-48 lg:w-56"
          src={require("../../assets/brand/Codenitiva.svg")}
        />
        <div className="text-xs lg:text-sm font-content text-dark my-1">Copyright © Codenitiva, Inc. All rights reserved</div>
      </div>
    </footer>
  );
}