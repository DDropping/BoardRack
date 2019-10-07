import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

const LocationText = props => {
  const handlEditClick = () => {
    console.log('handle edit click');
  };
  return (
    <p style={{ display: 'inline-block', fontStyle: 'italic' }}>
      {props.location.city + ', '}
      {props.location.state + ' '}
      {props.location.postalCode + ' '}
      <Icon onClick={props.handleEditClick} type="edit" />
    </p>
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
  null
)(LocationText);
