import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputNumber, Checkbox } from 'antd';

import {
  UPDATE_PRICE_HIGH,
  UPDATE_PRICE_LOW,
  UPDATE_ANY_PRICE
} from '../../../../actions/types';

const PriceRange = () => {
  const dispatch = useDispatch();
  const anyPrice = useSelector(state => state.filters.anyPrice);

  return (
    <div>
      <strong>Price:</strong>
      <div style={{ borderBottom: '1px solid #E9E9E9', marginBottom: '3px' }}>
        <Checkbox
          onChange={() =>
            dispatch({ type: UPDATE_ANY_PRICE, payload: !anyPrice })
          }
          checked={anyPrice}
        >
          Any Price
        </Checkbox>
      </div>
      <div
        onClick={() => {
          dispatch({ type: UPDATE_ANY_PRICE, payload: false });
        }}
        style={{ display: 'inline-block', marginRight: '10px' }}
      >
        <InputNumber
          size="small"
          disabled={anyPrice}
          formatter={value =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={value =>
            dispatch({ type: UPDATE_PRICE_LOW, payload: value })
          }
        />
      </div>
      -
      <div
        onClick={() => dispatch({ type: UPDATE_ANY_PRICE, payload: false })}
        style={{ display: 'inline-block', marginLeft: '10px' }}
      >
        <InputNumber
          size="small"
          disabled={anyPrice}
          formatter={value =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={value => {
            dispatch({ type: UPDATE_PRICE_HIGH, payload: value });
          }}
        />
      </div>
    </div>
  );
};

export default PriceRange;
