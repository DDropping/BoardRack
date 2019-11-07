import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';

import { TOGGLE_LOGIN_MODAL } from '../../../actions/types';
import LoginForm from './LoginForm';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isLoginModalVisible);
  return (
    <div>
      <Modal
        title="Login"
        visible={isVisible}
        onOk={() => dispatch({ type: TOGGLE_LOGIN_MODAL })}
        onCancel={() => dispatch({ type: TOGGLE_LOGIN_MODAL })}
        footer={null}
        zIndex={1100}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

export default LoginModal;
