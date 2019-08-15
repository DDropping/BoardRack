import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { toggleRegisterModal } from '../../actions/registerModal';

const Register = props => {
  return (
    <div>
      <Modal
        title="Register Modal"
        visible={props.visible}
        onOk={props.toggleRegisterModal}
        onCancel={props.toggleRegisterModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.registerModal.visible
  };
};

export default connect(
  mapStateToProps,
  { toggleRegisterModal }
)(Register);
