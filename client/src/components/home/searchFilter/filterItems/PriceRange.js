import React, { useState } from 'react';
import { InputNumber, Checkbox } from 'antd';

const PriceRange = () => {
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(1000);
  const [isAnyPrice, setIsAnyPrice] = useState(true);
  return (
    <div>
      <strong>Price:</strong>
      <br />
      <Checkbox
        onChange={() => setIsAnyPrice(!isAnyPrice)}
        checked={isAnyPrice}
      >
        Any Price
      </Checkbox>
      <br />
      <div
        onClick={() => setIsAnyPrice(false)}
        style={{ display: 'inline-block', marginRight: '10px' }}
      >
        <InputNumber
          size="small"
          defaultValue={priceLow}
          disabled={isAnyPrice}
          formatter={value =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={value => setPriceLow(value)}
        />
      </div>
      -
      <div
        onClick={() => setIsAnyPrice(false)}
        style={{ display: 'inline-block', marginLeft: '10px' }}
      >
        <InputNumber
          size="small"
          defaultValue={priceHigh}
          disabled={isAnyPrice}
          formatter={value =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={value => setPriceHigh(value)}
        />
      </div>
    </div>
  );
};

export default PriceRange;
