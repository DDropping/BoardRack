import React, { useState } from 'react';
import { InputNumber, Slider } from 'antd';

const PriceRange = () => {
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(1000);
  return (
    <div>
      Price:
      <Slider
        range
        max={1000}
        defaultValue={[0, 1000]}
        value={[100, 500]}
        onChange={value => setPriceLow(value)}
        onAfterChange={value => setPriceHigh(value)}
      />
      <InputNumber
        size="small"
        defaultValue={priceLow}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={value => setPriceLow(value)}
      />
      -
      <InputNumber
        size="small"
        defaultValue={priceHigh}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={value => setPriceHigh(value)}
      />
    </div>
  );
};

export default PriceRange;
