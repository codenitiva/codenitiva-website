import React, { useState } from "react";
import images from "../../variables/images";
import dropDownData from "./Dropdown.const";
import { DropDownProps } from "./Dropdown.type";


const DropDown : React.FC<DropDownProps> = ({ list, placeholder, setChosenItem }) => {

  const [_open, _setOpen] = useState(false);
  const [_chosen, _setChosen] = useState(placeholder);

  const _handleClick = (label: string) => {
    _setChosen(label);
    _setOpen(prevState => !prevState);
    setChosenItem(label);
  };

  return (
    <div>
      <div 
        className="flex flex-row justify-between items-center p-2 border-b-2 cursor-pointer"
        onClick={ () => _setOpen(prevState => !prevState) }
      >
        <h2 className="w-48 lg:w-56 text-base lg:text-lg">
          {_chosen}
        </h2>
        <div className="flex justify-center items-center">
          <img
            className={`transform transition duration-100 ${ _open ? 'rotate-180' : '-rotate-0' }`}
            src={images('dropdown')}
            alt="arrow"
          />
        </div>
      </div>
      {_open ? 
        <div className={`
          absolute bg-white flex flex-col justify-start items-start z-10
        `}>
          {dropDownData(list)?.map((label, index) => (
            <div className="w-full border-2 border-t-0 cursor-pointer">
              <h2 
                key={`#items-list-${label}-${index}`}
                className="w-48 lg:w-56 text-base lg:text-lg mx-2 my-1" 
                onClick={ () => _handleClick(label) }
              >
                {label}
              </h2>
            </div>
            ))}
        </div> : null
      }
    </div>
  );
};

export default DropDown;