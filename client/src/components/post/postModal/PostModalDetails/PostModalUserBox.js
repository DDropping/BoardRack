import React, { useState } from 'react';
import { Avatar, Button, Icon } from 'antd';

import PostModalContact from './PostModalContact';

const PostModalUserBox = ({ user, location }) => {
  const [isContact, setIsContact] = useState(false);
  return (
    <div className="br-post-modal-user-box">
      <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <Avatar size={64} icon="user" />
      </div>
      <div
        style={{
          display: 'inline-block',
          verticalAlign: 'top'
        }}
      >
        <span style={{ fontSize: '25px' }}>{user.username}</span>
        <br />
        {location.city + ', ' + location.state}
      </div>
      <div
        style={{
          float: 'right',
          textAlign: 'right'
        }}
      >
        <Button type="primary" onClick={() => setIsContact(!isContact)}>
          Contact
        </Button>
        {isContact ? (
          <div>
            <Icon type="phone" /> (831) 535-3535
            <br />
            <Icon type="mail" /> boards@boardrack.com
          </div>
        ) : null}
      </div>
      <span style={{ clear: 'both', display: 'block' }} />
      {/* clear fix for float */}
      {isContact ? <PostModalContact user={user} /> : null}
    </div>
  );
};

export default PostModalUserBox;
