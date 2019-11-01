import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { toggleRegisterModal } from '../../../actions/overlay';
import RegisterForm from './RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isRegisterModalVisible);
  return (
    <div>
      <Modal
        title="Register"
        visible={isVisible}
        onOk={dispatch(() => toggleRegisterModal())}
        onCancel={dispatch(() => toggleRegisterModal())}
        footer={null}
        zIndex={1100}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};

export default Register;
