import React from 'react';
import { connect } from 'react-redux';

import PublishButton from './PublishButton';
import Location from './Location';

const ConfirmPost = props => {
  return (
    <div>
      <Location />
      <PublishButton />
    </div>
  );
};

export default connect(
  null,
  null
)(ConfirmPost);
