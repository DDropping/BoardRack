import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';

export const PriceRange = () => {
  const [inputValue, setInputValue] = useState(4);
  const InputGroup = Input.Group;
  function onChange(value) {
    console.log('changed', value);
  }
  return (
    <div>
      Price:
      <InputNumber
        defaultValue={0}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={onChange}
      />
    </div>
  );
};

export default PriceRange;
