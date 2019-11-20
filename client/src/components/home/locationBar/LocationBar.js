import React from 'react';

import './locationBar.css';
import LocationText from './LocationText';
import Results from './Results';

const LocationBar = () => {
  return (
    <div className="br-location-bar-container">
      <LocationText />
      <Results />
    </div>
  );
};

export default LocationBar;
