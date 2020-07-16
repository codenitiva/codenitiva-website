import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Layout from "../../components/Layout/Layout";
import signUpConstants from "./SignUp.const";
import ModalTC from "../../components/Modal/Modal";

const SignUp : React.FC = () => {

  const [_showModal, _setShowModal] = useState(false);

  const _openModal = () => _setShowModal(true);
  const _closeModal = () => _setShowModal(false);
  
  return (
    <div className="flex w-full">
      <ModalTC open={_showModal} close={_closeModal} />
      <Layout secondary>
        <Form data={signUpConstants.formData} open={_openModal}/>
      </Layout>
    </div>
  );
};

export default SignUp;
