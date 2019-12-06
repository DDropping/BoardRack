import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';

import { UPDATE_SORT } from '../../../actions/types';

const SortButton = () => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filters.sort);

  return (
    <div
      style={{
        display: 'inline-block',
        float: 'right'
      }}
    >
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>
              <div
                onClick={() =>
                  dispatch({ type: UPDATE_SORT, payload: 'Newest' })
                }
              >
                Newest
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() =>
                  dispatch({ type: UPDATE_SORT, payload: '$ Low-High' })
                }
              >
                $ Low-High
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() =>
                  dispatch({ type: UPDATE_SORT, payload: '$ High-Low' })
                }
              >
                $ High-Low
              </div>
            </Menu.Item>
          </Menu>
        }
      >
        <div style={{ cursor: 'pointer' }}>
          <strong>
            {sort} <Icon type="down" />
          </strong>
        </div>
      </Dropdown>
    </div>
  );
};

export default SortButton;
