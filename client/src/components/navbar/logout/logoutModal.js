import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { toggleLogoutModal } from '../../../actions/modal_logout';

const LogoutModal = props => {
  return (
    <div>
      <Modal
        title="Logout"
        visible={props.isVisible}
        onOk={props.toggleLogoutModal}
        onCancel={props.toggleLogoutModal}
        footer={null}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.logoutModal.isVisible
  };
};

export default connect(
  mapStateToProps,
  { toggleLogoutModal }
)(LogoutModal);
