import React from 'react';
import { connect } from 'react-redux';
import { Result, Modal } from 'antd';

const ResultModal = props => {
  return (
    <Modal
      visible={props.isVisible}
      onOk={props.closeResultModal}
      onCancel={props.closeResultModal}
      footer={null}
      zIndex={1100}
    >
      <Result
        status="success"
        title={props.titleText}
        subTitle={props.subTitleText}
      />
    </Modal>
  );
};

const mapStateToProps = state => {
  (isVisible = state.resultModal.isVisible),
    (title = state.resultModal.title),
    (subTitle = state.result.subTitle);
};

export default connect(
  mapStateToProps,
  { closeResultModal }
)(ResultModal);
