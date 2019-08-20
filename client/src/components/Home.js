import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setAlert } from '../actions/alert';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <div className="App">
          <Button
            onClick={() =>
              this.props.setAlert('Home Button Clicked!', 'danger')
            }
            type="primary"
          >
            Button
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { setAlert }
)(Home);
