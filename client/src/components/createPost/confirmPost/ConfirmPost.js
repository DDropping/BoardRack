import React from 'react';
import { connect } from 'react-redux';

import PublishButton from './PublishButton';

const ConfirmPost = props => {
  return (
    <div>
      <PublishButton />
    </div>
  );
};

export default connect(
  null,
  null
)(ConfirmPost);
