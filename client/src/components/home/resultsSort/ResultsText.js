import React from 'react';
import { useSelector } from 'react-redux';

const ResultsText = () => {
  const results = useSelector(state => state.post.postList.length);

  return (
    <div style={{ display: 'inline-block' }}>
      <strong>
        {results <= 100 ? results : 100}/{results} Found
      </strong>
    </div>
  );
};

export default ResultsText;
