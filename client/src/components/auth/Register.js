import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { toggleRegisterModal } from '../../actions/modal';

const Register = props => {
  return (
    <div>
      <Button type="primary" onClick={props.toggleRegisterModal}>
        Open Modal
      </Button>
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
      visible: {String(props.visible)}
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
