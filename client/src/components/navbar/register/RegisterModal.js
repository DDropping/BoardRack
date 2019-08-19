import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { toggleRegisterModal } from '../../../actions/registerModal';
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
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.registerModal.isVisible
  };
};

export default connect(
  mapStateToProps,
  { toggleRegisterModal }
)(Register);
