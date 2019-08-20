import React from 'react';
import { Avatar } from 'antd';

const AccountAvatar = () => {
  return (
    <Avatar
      style={{
        marginBottom: '10px',
        marginTop: '10px',
        marginLeft: '50px',
        marginRight: '50px'
      }}
      size={200}
      icon="user"
    />
  );
};

export default AccountAvatar;
