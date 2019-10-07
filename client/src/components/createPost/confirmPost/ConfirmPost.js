import React from 'react';
import { connect } from 'react-redux';

import PublishButton from './PublishButton';
import LocationForm from './location/LocationForm';
import LocationText from './location/LocationText';

const ConfirmPost = props => {
  return (
    <div>
      <LocationForm />
      <PublishButton />
    </div>
  );
};

export default connect(
  null,
  null
)(ConfirmPost);
