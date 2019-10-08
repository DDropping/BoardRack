import React from 'react';
import { connect } from 'react-redux';
import { Icon, Tooltip } from 'antd';

import { editLocation } from '../../../../actions/user/location';

const LocationText = props => {
  const handlEditClick = () => {
    props.editLocation();
  };
  return (
    <div style={{ display: 'inline-block' }}>
      {props.location.postalCode !== null && (
        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>
          {props.location.city + ', '}
          {props.location.state + ' '}
          {props.location.postalCode + ' '}
          <Tooltip title="Edit Location">
            <Icon onClick={handlEditClick} type="edit" />
          </Tooltip>
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    location: state.location,
    isLoading: state.location.isLoading
  };
};

export default connect(
  mapStateToProps,
  { editLocation }
)(LocationText);
