import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Result, Button } from 'antd';

import { toggleLogoutModal } from '../../../actions/overlay';
import { logoutUser } from '../../../actions/auth';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isLogoutModalVisible);
  return (
    <div>
      <Modal
        title="Logout"
        visible={isVisible}
        onOk={() => dispatch(toggleLogoutModal)}
        onCancel={() => dispatch(toggleLogoutModal)}
        footer={null}
        zIndex={1100}
      >
        <Result
          title="Are you sure?"
          style={{ padding: 0 }}
          extra={[
            <Button
              onClick={() => dispatch(toggleLogoutModal)}
              type="primary"
              key="console"
              size="large"
            >
              Cancel
            </Button>,
            <Button
              onClick={() => dispatch(logoutUser)}
              type="default"
              key="buy"
              size="large"
            >
              Logout
            </Button>
          ]}
        />
      </Modal>
    </div>
  );
};

export default LogoutModal;
