import React from "react";
import { InputProps } from "./Input.type";
import images from "../../variables/images";

const Input : React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  style = '',
  icon,
  setText
}) => {

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <div className="flex flex-row justify-between items-center border-b-2 p-2">
      <span className={`${style ? '' : 'hidden'} flex flex-row justify-center`}>
        <img
          src={images(icon)}
          alt={`icon-${icon}`}
        />
        <div className="border-r-2 h-8 mx-2"></div>
      </span>
      <input
        className="w-full placeholder-gray-900"
        onChange={ _handleChange }
        type={type}
        placeholder={placeholder}
      />
      <span className={`${style ? 'hidden' : ''}`}>
        <img
          src={images(icon)}
          alt={`icon-${icon}`}
        />
      </span>
    </div>
  );
};

export default Input;