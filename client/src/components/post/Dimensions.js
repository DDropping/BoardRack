import React from 'react';

const Dimensions = ({ lengthFt, lengthIn, width, depth, volume }) => {
  return (
    <div>
      <i>
        <div style={{ display: 'inline-block' }}>
          {lengthFt && 'Dims: ' + lengthFt + "' "}
          {lengthIn && lengthIn + '" '}
          {(lengthFt || lengthIn) && 'x '}
          {width && width + '" x '}
          {depth && depth + '"'}
        </div>
        <div style={{ display: 'inline-block', marginLeft: '20px' }}>
          {volume && 'Volume: ' + volume + 'L'}
        </div>
      </i>
    </div>
  );
};

export default Dimensions;
