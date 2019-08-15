import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { openModal, closeModal, toggleModal } from '../../actions/modal';

const Register = props => {
  return (
    <div>
      <Button type="primary" onClick={props.toggleModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onOk={props.toggleModal}
        onCancel={props.toggleModal}
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
    visible: state.modal.visible
  };
};

export default connect(
  mapStateToProps,
  { openModal, closeModal, toggleModal }
)(Register);
