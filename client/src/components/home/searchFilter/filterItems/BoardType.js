import React, { useState } from 'react';
import { Checkbox, Col } from 'antd';

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
const defaultCheckedList = [];

export const BoardType = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = checkedList => {
    setCheckedList(checkedList);
    !!checkedList.length && checkedList.length < plainOptions.length
      ? setIndeterminate(true)
      : setIndeterminate(false);
    checkedList.length === plainOptions.length
      ? setCheckAll(true)
      : setCheckAll(false);
  };

  const onCheckAllChange = e => {
    e.target.checked ? setCheckedList(plainOptions) : setCheckedList([]);
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
      <br />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  );
};

export default BoardType;
