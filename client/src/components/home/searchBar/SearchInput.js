import React from 'react';
import { Input } from 'antd';

import './searchInput.css';

const SearchInput = () => {
  const { Search } = Input;

  return (
    <div className="br-search-input">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        placeholder="BoardRack..."
        onSearch={value => console.log(value)}
      />
    </div>
  );
};

export default SearchInput;
