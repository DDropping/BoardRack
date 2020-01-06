import React from 'react';
import { Avatar, Button } from 'antd';

const PostModalUserBox = ({ user, location }) => {
  return (
    <div className="post-modal-user-box">
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
        <br />
        posts: 1
      </div>

      <div style={{ float: 'right', textAlign: 'right' }}>
        username@boardrack.com <br />
        (831)556-6778
        <br />
        <Button>Message</Button>
      </div>
    </div>
  );
};

export default PostModalUserBox;
