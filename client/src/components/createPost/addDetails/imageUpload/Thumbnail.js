import React from 'react';
import { Card } from 'antd';

const Thumbnail = thumbnailUrl => {
  return (
    <div>
      <Card
        style={{ width: 200, padding: 'none' }}
        bodyStyle={{ padding: 0 }}
        cover={<img alt="image-surfboard" src={props.thumbnailUrl} />}
        actions={[
          <Icon type="star" key="star" />,
          <Icon type="delete" key="delete" />
        ]}
      ></Card>
    </div>
  );
};

export default Thumbnail;
