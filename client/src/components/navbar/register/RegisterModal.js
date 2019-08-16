import React from 'react';
import { connect } from 'react-redux';
import { Modal, Input } from 'antd';
import { toggleRegisterModal } from '../../../actions/registerModal';

const Register = props => {
  return (
    <div>
      <Modal
        title="Register"
        visible={props.isVisible}
        onOk={props.toggleRegisterModal}
        onCancel={props.toggleRegisterModal}
      >
        <Input placeholder="Username..." />
        <Input placeholder="Password..." />
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
