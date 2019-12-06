import React from 'react';

import './resultsBar.css';
import ResultsText from './ResultsText';
import SortButton from './SortButton';

const ResultsBar = () => {
  return (
    <div className="br-resultsBar-container">
      <ResultsText />
      <SortButton />
    </div>
  );
};

export default ResultsBar;
