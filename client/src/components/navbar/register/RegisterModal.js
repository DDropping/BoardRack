import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { toggleRegisterModal } from '../../../actions/overlay';
import RegisterForm from './RegisterForm';

const Register = props => {
  return (
    <div>
      <Modal
        title="Register"
        visible={props.isVisible}
        onOk={props.toggleRegisterModal}
        onCancel={props.toggleRegisterModal}
        footer={null}
        zIndex={1100}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.overlay.isRegisterModalVisible
  };
};

export default connect(
  mapStateToProps,
  { toggleRegisterModal }
)(Register);
