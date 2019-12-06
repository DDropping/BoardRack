import React from 'react';
import { Tag } from 'antd';

const ConditionTag = ({ condition }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        top: '-3px'
      }}
    >
      {condition === 'New' && <Tag color="#52c41a">New</Tag>}
      {condition === 'Lightly Used' && <Tag color="#00458a">Lightly Used</Tag>}
      {condition === 'Used' && <Tag color="#00458a">Used</Tag>}
      {condition === 'Heavily Used' && <Tag color="#4878a9">Heavily Used</Tag>}
      {condition === 'Thrashed' && <Tag color="#f50">Thrashed</Tag>}
    </div>
  );
};

export default ConditionTag;
