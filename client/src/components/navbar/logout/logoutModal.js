import React from 'react';
import { connect } from 'react-redux';
import { Modal, Result, Button } from 'antd';

import { toggleLogoutModal } from '../../../actions/modal_logout';
import { logoutUser } from '../../../actions/auth';

const LogoutModal = props => {
  return (
    <div>
      <Modal
        title="Logout"
        visible={props.isVisible}
        onOk={props.toggleLogoutModal}
        onCancel={props.toggleLogoutModal}
        footer={null}
      >
        <Result
          title="Are you sure you want to Logout?"
          extra={[
            <Button
              onClick={props.toggleLogoutModal}
              type="primary"
              key="console"
            >
              Cancel
            </Button>,
            <Button onClick={props.logoutUser} key="buy">
              Logout
            </Button>
          ]}
        />
      </Modal>
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
  { toggleLogoutModal, logoutUser }
)(LogoutModal);
