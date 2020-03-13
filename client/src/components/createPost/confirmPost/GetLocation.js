import React from 'react';
import { useSelector } from 'react-redux';

import GetLocationButton from './location/GetLocationButton';
import LocationForm from './location/LocationForm';
import LocationText from './location/LocationText';

const GetLocation = () => {
  const displayLocationForm = useSelector(
    state => state.location.displayLocationForm
  );
  return (
    <div>
      {!displayLocationForm ? (
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

export default GetLocation;
