import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const results = useSelector(state => state.post.postList.length);

  return (
    <div style={{ display: 'inline-block', float: 'right' }}>
      {results <= 100 ? results : 100}/{results} Found
    </div>
  );
};

export default Results;
