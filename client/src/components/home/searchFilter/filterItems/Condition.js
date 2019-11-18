import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Row, Col } from 'antd';

import { UPDATE_CONDITION } from '../../../../actions/types';

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  'New',
  'Lightly Used',
  'Used',
  'Heavily Used',
  'Thrashed'
];
const defaultCheckedList = [
  'New',
  'Lightly Used',
  'Used',
  'Heavily Used',
  'Thrashed'
];

export const Condition = () => {
  const dispatch = useDispatch(); //
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);

  const onChange = checkedList => {
    setCheckedList(checkedList);
    dispatch({ type: UPDATE_CONDITION, payload: checkedList });
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
      dispatch({ type: UPDATE_CONDITION, payload: plainOptions });
    } else {
      setCheckedList([]);
      dispatch({ type: UPDATE_CONDITION, payload: [] });
    }
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <div>
      <strong>Condition:</strong>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          All Conditions
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

export default Condition;
