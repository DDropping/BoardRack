import React, { useState } from 'react';
import { Input, Button, Icon } from 'antd';

const { TextArea } = Input;

const PostModalContact = ({ user }) => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <TextArea
        rows={4}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={'Send ' + user.username + ' a message...'}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" block>
        Send Message
      </Button>
    </div>
  );
};

export default PostModalContact;
