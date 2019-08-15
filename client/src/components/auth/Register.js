import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { openModal, closeModal } from '../../actions/modal';

const Register = props => {
  //   state = { visible: false };

  //   showModal = () => {
  //     this.setState({
  //       visible: true
  //     });
  //   };

  //   handleOk = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false
  //     });
  //   };

  //   handleCancel = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false
  //     });
  //   };

  return (
    <div>
      <Button type="primary" onClick={props.openModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onOk={props.closeModal}
        onCancel={props.closeModal}
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
  { openModal, closeModal }
)(Register);
