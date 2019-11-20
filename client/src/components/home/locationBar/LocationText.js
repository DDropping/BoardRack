import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Tooltip } from 'antd';

import { editLocation } from '../../../actions/user/location';

const LocationText = props => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.location);

  const handleEditClick = () => {
    dispatch(editLocation());
  };
  return (
    <div style={{ display: 'inline-block' }}>
      {location.postalCode !== null && (
        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>
          {location.city + ', '}
          {location.state + ' '}
          {location.postalCode + ' '}
          <Tooltip title="Edit Location">
            <Icon onClick={handleEditClick} type="edit" />
          </Tooltip>
        </p>
      )}
    </div>
  );
};

export default LocationText;
