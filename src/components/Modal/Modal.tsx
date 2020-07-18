import React, { useState } from "react";
import images from "../../variables/images";
import { ModalProps } from "./Modal.type";
import Input from "../Input/Input";

const ModalLayout : React.FC<ModalProps> = ({ open, close, children }) => {
  return (
    <div className={`
      ${open ? '' : 'hidden'}
      absolute top-modal left-0 w-full h-screen
      flex flex-col items-center
    `}>
      <div className={`
        w-4/5 md:w-88 lg:w-2/5 bg-gray-100 py-4 px-6
        flex flex-col justify-between items-start z-50
        rounded-lg
      `}>
        <div onClick={close} className="self-end mb-4">
          <img
            className="w-6"
            src={images("cross")}
            alt="Close"
          />
        </div>
        {children}
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-muted opacity-75 z-40"/>
    </div>
  );
};

const ModalTC : React.FC<ModalProps> = ({ open, close }) => {

  const [_text, _setText] = useState("");

  return (
    <ModalLayout 
      open={open}
      close={close}
    >
      <div className="w-full flex flex-col">
        {/* TODO store to variable */}
        <p className="mx-1 text-left">
          Before submitting, you need to accept 
          <span className="text-primary"> Codenitiva</span>’s 
          <span className="text-blue-500"> Terms & Conditions</span> 
          <span className="text-blue-500"> Code of Honour.</span>
        </p>
        <p className="mx-1">
          Type in the words “I agree to Codenitiva’s 
          Terms & Conditions and Code of Honour” 
          to submit this form
        </p>

        <Input 
          type="text"
          placeholder="Type here"
          icon=""
          setText={_setText}
        />
        <button
          className="btn primary mt-4 text-lg"
          onClick={ () => console.log(_text) }
        >
          Submit
        </button>
      </div>
    </ModalLayout>
  );
};

export default ModalTC;