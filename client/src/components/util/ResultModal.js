import React from 'react';
import { connect } from 'react-redux';
import { Result, Modal } from 'antd';

import { closeResultModal } from '../../actions/modals/resultModal';

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
        status={props.status}
        title={props.title}
        subTitle={props.subTitle}
      />
    </Modal>
  );
};

const mapStateToProps = state => {
  if (state.resultModal.status !== '') {
    return {
      status: state.resultModal.status,
      isVisible: state.resultModal.isVisible,
      title: state.resultModal.title,
      subTitle: state.resultModal.subTitle
    };
  } else {
    return {
      isVisible: state.resultModal.isVisible
    };
  }
};

export default connect(
  mapStateToProps,
  { closeResultModal }
)(ResultModal);
