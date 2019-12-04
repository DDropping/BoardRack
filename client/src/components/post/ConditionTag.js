import React from 'react';
import { Tag } from 'antd';

const ConditionTag = condition => {
  return (
    <div
      style={{
        display: 'inline-block',
        marginLeft: '10px',
        position: 'relative',
        top: '-3px'
      }}
    >
      {condition.condition === 'New' && <Tag color="#52c41a">New</Tag>}
      {condition.condition === 'Lightly Used' && (
        <Tag color="#00458a">Lightly Used</Tag>
      )}
      {condition.condition === 'Used' && <Tag color="#00458a">Used</Tag>}
      {condition.condition === 'Heavily Used' && (
        <Tag color="#4878a9">Heavily Used</Tag>
      )}
      {condition.condition === 'Thrashed' && <Tag color="#f50">Thrashed</Tag>}
    </div>
  );
};

export default ConditionTag;
