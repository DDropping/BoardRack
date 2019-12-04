import React from 'react';

const Dimensions = ({ lengthFt, lengthIn, width, depth, volume }) => {
  return (
    <div>
      <i>
        <div style={{ display: 'inline-block' }}>
          {'Dims: ' +
            lengthFt +
            "' " +
            lengthIn +
            '" x ' +
            width +
            '" x ' +
            depth +
            '"'}
        </div>
        <div style={{ display: 'inline-block', marginLeft: '20px' }}>
          {'Volume: ' + volume + 'L'}
        </div>
      </i>
    </div>
  );
};

export default Dimensions;
