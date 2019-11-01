import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { TOGGLE_REGISTER_MODAL } from '../../../actions/types';
import RegisterForm from './RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isRegisterModalVisible);
  return (
    <div>
      <Modal
        title="Register"
        visible={isVisible}
        onOk={() => dispatch({ type: TOGGLE_REGISTER_MODAL })}
        onCancel={() => dispatch({ type: TOGGLE_REGISTER_MODAL })}
        footer={null}
        zIndex={1100}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};

export default Register;
