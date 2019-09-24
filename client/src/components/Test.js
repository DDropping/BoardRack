import React from 'react';
import { Card, Icon } from 'antd';

const Test = () => {
  return (
    <div>
      <Card
        style={{ width: 240, padding: 'none' }}
        bodyStyle={{ padding: 0 }}
        cover={
          <img
            alt="example"
            src="https://boardrack.s3-us-west-1.amazonaws.com/1569281898504"
          />
        }
        actions={[
          <Icon type="star" key="star" />,
          <Icon type="delete" key="delete" />
        ]}
      ></Card>
    </div>
  );
};

export default Test;
