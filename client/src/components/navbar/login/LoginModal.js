import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { toggleLoginModal } from '../../../actions/loginModal';
import LoginForm from './LoginForm';

const LoginModal = props => {
  return (
    <div>
      <Modal
        title="Login"
        visible={props.isVisible}
        onOk={props.toggleLoginModal}
        onCancel={props.toggleLoginModal}
        footer={null}
        zIndex={1100}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.loginModal.isVisible
  };
};

export default connect(
  mapStateToProps,
  { toggleLoginModal }
)(LoginModal);
