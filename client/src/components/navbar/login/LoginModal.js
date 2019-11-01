import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { toggleLoginModal } from '../../../actions/overlay';
import LoginForm from './LoginForm';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isLoginModalVisible);
  return (
    <div>
      <Modal
        title="Login"
        visible={isVisible}
        onOk={() => dispatch(toggleLoginModal)}
        onCancel={() => dispatch(toggleLoginModal)}
        footer={null}
        zIndex={1100}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

export default LoginModal;
