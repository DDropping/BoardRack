import React from 'react';

import PublishButton from './PublishButton';
import GetLocation from './GetLocation';

const ConfirmPost = () => {
  return (
    <div>
      <GetLocation />
      <PublishButton />
    </div>
  );
};

export default ConfirmPost;
