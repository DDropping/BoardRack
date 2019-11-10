import React from 'react';
import { InputNumber, Button } from 'antd';

//import LocationButton from '../../../createPost/confirmPost/location/GetLocationButton';

export const Distance = () => {
  return (
    <div>
      <strong>Distance: </strong>
      <br />
      <InputNumber
        size="small"
        defaultValue={25}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />{' '}
      miles from{' '}
      <InputNumber
        size="small"
        placeholder="area code"
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />
      <Button
        size="small"
        icon="environment"
        loading={false}
        type="primary"
        ghost
        style={{ display: 'inline-block', marginLeft: '5px' }}
      />
    </div>
  );
};

export default Distance;
