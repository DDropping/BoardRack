import React from 'react';

import PublishButton from './PublishButton';
import GetLocation from './GetLocation';

const ConfirmPost = props => {
  return (
    <div>
      <GetLocation />
      <PublishButton />
    </div>
  );
};

export default ConfirmPost;
