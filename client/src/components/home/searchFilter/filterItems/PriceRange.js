import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputNumber, Checkbox } from 'antd';

import {
  UPDATE_PRICE_HIGH,
  UPDATE_PRICE_LOW,
  UPDATE_ANY_PRICE
} from '../../../../actions/types';

const PriceRange = () => {
  const dispatch = useDispatch();
  const [priceLow, setPriceLow] = useState(0);
  const [priceHigh, setPriceHigh] = useState(1000);
  const [isAnyPrice, setIsAnyPrice] = useState(true);
  return (
    <div>
      <strong>Price:</strong>
      <div style={{ borderBottom: '1px solid #E9E9E9', marginBottom: '3px' }}>
        <Checkbox
          onChange={() => {
            setIsAnyPrice(!isAnyPrice);
            dispatch({ type: UPDATE_ANY_PRICE, payload: !isAnyPrice });
          }}
          checked={isAnyPrice}
        >
          Any Price
        </Checkbox>
      </div>
      <div
        onClick={() => {
          setIsAnyPrice(false);
          dispatch({ type: UPDATE_ANY_PRICE, payload: false });
        }}
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
          onChange={value => {
            setPriceLow(value);
            dispatch({ type: UPDATE_PRICE_LOW, payload: value });
          }}
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
          onChange={value => {
            setPriceHigh(value);
            dispatch({ type: UPDATE_PRICE_HIGH, payload: value });
          }}
        />
      </div>
    </div>
  );
};

export default PriceRange;
