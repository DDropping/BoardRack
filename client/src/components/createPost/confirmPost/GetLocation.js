import React from 'react';
import { connect } from 'react-redux';

import GetLocationButton from './location/GetLocationButton';
import LocationForm from './location/LocationForm';
import LocationText from './location/LocationText';

const GetLocation = props => {
  return (
    <div>
      {!props.displayLocationForm ? (
        <div>
          <GetLocationButton />
          <LocationText />
        </div>
      ) : (
        <LocationForm />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    displayLocationForm: state.location.displayLocationForm
  };
};

export default connect(
  mapStateToProps,
  null
)(GetLocation);
