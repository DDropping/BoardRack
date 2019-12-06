import React from 'react';
import { useSelector } from 'react-redux';

const Dimensions = ({ lengthFt, lengthIn, width, depth, volume }) => {
  const layout = useSelector(state => state.filters.layout);

  return (
    <div style={{ fontStyle: 'italic', display: 'inline-block' }}>
      <div style={{ display: 'inline-block' }}>
        {layout !== 'Gallery' && lengthFt && 'Dims: '}
        {lengthFt && lengthFt + "' "}
        {lengthIn && lengthIn + '" '}
        {(lengthFt || lengthIn) && 'x '}
        {width && width + '" x '}
        {depth && depth + '"'}
      </div>
      <div style={{ display: 'inline-block', marginLeft: '10px' }}>
        {layout !== 'Gallery' && volume && 'Volume: '}
        {volume && volume + 'L'}
      </div>
    </div>
  );
};

export default Dimensions;
