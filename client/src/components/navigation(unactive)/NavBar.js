import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import RightMenu from './RightMenu';
import RightMenuDrawer from './RightMenuDrawer';
import './navbar.css';

class NavBar extends Component {
  state = {
    current: 'mail',
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/br_logo_xs.jpg'}
          />
        </div>
        <div className="menuCon">
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <RightMenuDrawer />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default NavBar;