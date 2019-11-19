import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Row, Col } from 'antd';

import { UPDATE_BOARD_TYPE } from '../../../../actions/types';

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  'Shortboard',
  'Longboard',
  'Fish',
  'Funboard',
  'Hybrid',
  'Gun',
  'Grovler',
  'SUP'
];
const defaultCheckedList = [
  'Shortboard',
  'Longboard',
  'Fish',
  'Funboard',
  'Hybrid',
  'Gun',
  'Grovler',
  'SUP'
];

export const BoardType = () => {
  const dispatch = useDispatch();
  const boardTypes = useSelector(state => state.filters.boardType);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);

  const onChange = checkedList => {
    setCheckedList(checkedList);
    dispatch({ type: UPDATE_BOARD_TYPE, payload: checkedList });
    !!checkedList.length && checkedList.length < plainOptions.length
      ? setIndeterminate(true)
      : setIndeterminate(false);
    checkedList.length === plainOptions.length
      ? setCheckAll(true)
      : setCheckAll(false);
  };

  const onCheckAllChange = e => {
    if (e.target.checked) {
      setCheckedList(plainOptions);
      dispatch({ type: UPDATE_BOARD_TYPE, payload: plainOptions });
    } else {
      setCheckedList([]);
      dispatch({ type: UPDATE_BOARD_TYPE, payload: [] });
    }
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <div>
      <strong>Board Type:</strong>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          All Boards
        </Checkbox>
      </div>
      <div onClick={() => setCheckAll(false)}>
        <CheckboxGroup
          value={checkedList}
          onChange={onChange}
          disabled={checkAll}
        >
          <Row>
            {plainOptions.map(option => (
              <Col span={12} key={option}>
                <Checkbox value={option}>{option}</Checkbox>
              </Col>
            ))}
          </Row>
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default BoardType;
