import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Result, Button } from 'antd';

import { TOGGLE_LOGOUT_MODAL } from '../../../actions/types';
import { logoutUser } from '../../../actions/auth';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlay.isLogoutModalVisible);
  return (
    <div>
      <Modal
        title="Logout"
        visible={isVisible}
        onOk={() => dispatch({ type: TOGGLE_LOGOUT_MODAL })}
        onCancel={() => dispatch({ type: TOGGLE_LOGOUT_MODAL })}
        footer={null}
        zIndex={1100}
      >
        <Result
          title="Are you sure?"
          style={{ padding: 0 }}
          extra={[
            <Button
              onClick={() => {
                console.log('cancel logout clicked');
                dispatch({ type: TOGGLE_LOGOUT_MODAL });
              }}
              type="primary"
              key="console"
              size="large"
            >
              Cancel
            </Button>,
            <Button
              onClick={() => {
                console.log('logout clicked');
                dispatch(logoutUser());
              }}
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
