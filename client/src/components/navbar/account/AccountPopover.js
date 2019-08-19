import React from 'react';
import { Avatar, Button } from 'antd';

const AccountPopover = () => {
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
        <Button size="large" block>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AccountPopover;
