import React from 'react';
import { Input } from 'antd';

import './searchBar.css';

const SearchBar = () => {
  const { Search } = Input;

  return (
    <div className="br-search-input">
      <Search
        enterButton="Search"
        size="large"
        placeholder="Find Your Next Surfboard..."
        onSearch={value => console.log(value)}
      />
    </div>
  );
};

export default SearchBar;
