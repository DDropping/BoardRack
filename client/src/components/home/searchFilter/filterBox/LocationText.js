import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Tooltip } from 'antd';

const LocationText = () => {
  const location = useSelector(state => state.location.location);

  const handleEditClick = () => {
    console.log('handle edit click');
  };
  return (
    <h2 style={{ display: 'inline-block' }}>
      {location.city + ', '}
      {location.state + ' '}
      <Tooltip title="Edit Location">
        <Icon onClick={handleEditClick} type="edit" />
      </Tooltip>
    </h2>
  );
};

export default LocationText;
