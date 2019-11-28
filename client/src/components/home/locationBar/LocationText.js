import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Tooltip } from 'antd';

const LocationText = props => {
  const location = useSelector(state => state.location.location);
  const approxLocation = useSelector(state => state.location.approxLocation);
  const distance = useSelector(state => state.filters.distance);
  const postalCode = useSelector(state => state.filters.postalCode);

  const handleEditClick = () => {
    console.log('handle edit click');
  };
  return (
    <div style={{ display: 'inline-block' }}>
      {location.postalCode !== null && (
        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>
          {distance + ' miles from '}
          {location.city + ', '}
          {location.state + ' '}
          <Tooltip title="Edit Location">
            <Icon onClick={handleEditClick} type="edit" />
          </Tooltip>
        </p>
      )}
      {location.postalCode === null && approxLocation.postalCode !== null && (
        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>
          {distance + ' miles from '}
          {approxLocation.approxCity + ', '}
          {approxLocation.approxState + ' '}
          <Tooltip title="Edit Location">
            <Icon onClick={handleEditClick} type="edit" />
          </Tooltip>
        </p>
      )}
    </div>
  );
};

export default LocationText;
