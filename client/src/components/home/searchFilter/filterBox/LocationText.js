import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Tooltip } from 'antd';

const LocationText = () => {
  const location = useSelector(state => state.location.location);
  const approxLocation = useSelector(state => state.location.approxLocation);

  const handleEditClick = () => {
    console.log('handle edit click');
  };
  return (
    <div style={{ display: 'inline-block' }}>
      {location.postalCode !== null && (
        <h2 style={{ display: 'inline-block' }}>
          {location.city + ', '}
          {location.state + ' '}
          <Tooltip title="Edit Location">
            <Icon onClick={handleEditClick} type="edit" />
          </Tooltip>
        </h2>
      )}
      {location.postalCode === null && approxLocation.postalCode !== null && (
        <h2 style={{ display: 'inline-block' }}>
          {approxLocation.approxCity + ', '}
          {approxLocation.approxState + ' '}
          <Tooltip title="Edit Location">
            <Icon onClick={handleEditClick} type="edit" />
          </Tooltip>
        </h2>
      )}
    </div>
  );
};

export default LocationText;
