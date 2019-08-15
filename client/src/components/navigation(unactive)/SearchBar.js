import React, { Component } from 'react';
import { Menu, Input } from 'antd';

const { Search } = Input;

class SearchBar extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </Menu>
    );
  }
}
export default SearchBar;
