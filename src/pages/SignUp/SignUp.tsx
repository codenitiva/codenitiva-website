import React, { useState } from "react";
import Input from "../../components/Input/Input";

const SignUp : React.FC = () => {
  
  const [_email, _setEmail] = useState("");

  console.log(_email);

  return (
    <div className="flex w-full justify-center items-center">
      <Input 
        type="text"
        placeholder="eg. hi@codenitiva.com"
        setText={_setEmail}
        icon="user"
        style="left"
      />
    </div>
  );
};

export default SignUp;
