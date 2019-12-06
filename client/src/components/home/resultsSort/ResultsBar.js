import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'antd';

import './resultsBar.css';
import ResultsText from './ResultsText';
import SortButton from './SortButton';

const ResultsBar = () => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filters.sort);
  const results = useSelector(state => state.post.postList.length);
  return (
    <div className="br-resultsBar-container">
      <ResultsText />
      <SortButton />
    </div>
  );
};

export default ResultsBar;
