import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Menu, Dropdown } from 'antd';

import './layoutButton.css';
import { UPDATE_LAYOUT } from '../../../../../actions/types';

const LayoutButton = () => {
  const dispatch = useDispatch();
  const layoutValue = useSelector(state => state.filters.layout);

  return (
    <div
      style={{
        display: 'inline-block',
        float: 'right'
      }}
    >
      <Dropdown
        placement="bottomCenter"
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item>
              <div
                onClick={() =>
                  dispatch({ type: UPDATE_LAYOUT, payload: 'List' })
                }
              >
                <Icon type="menu" />
                {' List'}
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() =>
                  dispatch({ type: UPDATE_LAYOUT, payload: 'Thumb' })
                }
              >
                <Icon type="unordered-list" />
                {' Thumb'}
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() =>
                  dispatch({ type: UPDATE_LAYOUT, payload: 'Gallery' })
                }
              >
                <Icon type="appstore" />
                {' Gallery'}
              </div>
            </Menu.Item>
          </Menu>
        }
      >
        <div style={{ cursor: 'pointer' }}>
          <strong>
            {layoutValue === 'List' && <Icon type="menu" />}
            {layoutValue === 'Thumb' && <Icon type="unordered-list" />}
            {layoutValue === 'Gallery' && <Icon type="appstore" />}
            {' ' + layoutValue} <Icon type="down" />
          </strong>
        </div>
      </Dropdown>
    </div>
  );
};

export default LayoutButton;
