import React from 'react';
import { Icon } from 'antd';

const ViewCounter = viewCount => {
  return (
    <div>
      <div
        style={{
          display: 'inline-block',
          marginRight: '2px',
          fontSize: '18px',
          color: '#616161',
          position: 'relative',
          top: '-1px'
        }}
      >
        {viewCount.viewCount}
      </div>

      <Icon
        style={{ fontSize: '20px', color: '#00458a', marginRight: '10px' }}
        type="eye"
      />
    </div>
  );
};

export default ViewCounter;
