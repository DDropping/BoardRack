import React from 'react';

const Dimensions = ({ lengthFt, lengthIn, width, depth, volume }) => {
  return (
    <div style={{ fontStyle: 'italic' }}>
      <div style={{ display: 'inline-block' }}>
        {lengthFt && 'Dims: ' + lengthFt + "' "}
        {lengthIn && lengthIn + '" '}
        {(lengthFt || lengthIn) && 'x '}
        {width && width + '" x '}
        {depth && depth + '"'}
      </div>
      <div style={{ display: 'inline-block', marginLeft: '10px' }}>
        {volume && volume + 'L'}
      </div>
    </div>
  );
};

export default Dimensions;
