import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'antd';

const SortButton = () => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filters.sort);
  return (
    <div
      style={{
        display: 'inline-block',
        float: 'right'
      }}
    >
      <strong>
        {sort}
        <Icon type="down" />
      </strong>
    </div>
  );
};

export default SortButton;
