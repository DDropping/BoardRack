import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
}

export default Home;
