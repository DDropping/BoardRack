import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Button } from 'antd';

import { logoutUser } from '../../../actions/auth';

const AccountPopover = props => {
  return (
    <div style={{ width: '300px' }}>
      <Avatar
        style={{
          marginBottom: '10px',
          marginLeft: '50px',
          marginRight: '50px'
        }}
        size={200}
        icon="user"
      />

      <div>
        <Button style={{ marginBottom: '10px' }} size="large" block>
          Account
        </Button>
        <Button style={{ marginBottom: '10px' }} size="large" block>
          Posts
        </Button>
        <Button style={{ marginBottom: '10px' }} size="large" block>
          Messages
        </Button>
        <Button onClick={props.logoutUser} size="large" block>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { logoutUser }
)(AccountPopover);