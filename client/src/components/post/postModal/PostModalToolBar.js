import React from 'react';
import { Icon } from 'antd';

import './postModal.css';

const PostModalToolBar = ({ post, hidePostModal }) => {
  return (
    <div className="br-post-modal-toolbar-wrapper">
      <div
        style={{
          display: 'inline-block',
          padding: '0px 20px',
          cursor: 'pointer'
        }}
        onClick={() => console.log('click favorite postmodaltoolbar')}
      >
        <Icon type="star" theme="filled" /> Favorite
      </div>
      <div
        style={{
          display: 'inline-block',
          padding: '0px 20px',
          cursor: 'pointer',
          borderLeft: '2px solid white'
        }}
        onClick={() => console.log('click favorite postmodaltoolbar')}
      >
        <Icon type="mail" /> Contact
      </div>
      <div
        style={{
          float: 'right',
          padding: '0px 20px',
          cursor: 'pointer',
          borderLeft: '2px solid white'
        }}
        onClick={() => hidePostModal()}
      >
        <Icon type="close-circle" /> Close
      </div>
      <div className="br-post-modal-toolbar"></div>
    </div>
  );
};

export default PostModalToolBar;
