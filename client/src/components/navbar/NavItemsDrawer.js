import React from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';

import { toggleNavDrawer } from '../../actions/drawer_nav';

const NavItemsDrawer = props => {
  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={props.toggleNavDrawer}
        visible={props.isVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.navDrawer.isVisible
  };
};

export default connect(
  mapStateToProps,
  { toggleNavDrawer }
)(NavItemsDrawer);
