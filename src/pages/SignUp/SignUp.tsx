import React from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/Layout/Layout";
import signUpConstants from "./SignUp.const";

const SignUp : React.FC = () => {

  return (
    <div className="flex w-full">
      <Layout secondary>
        <Form data={signUpConstants.formData}/>
      </Layout>
    </div>
  );
};

export default SignUp;
