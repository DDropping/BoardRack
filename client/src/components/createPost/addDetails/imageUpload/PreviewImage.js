import React from 'react';
import { Card, Icon } from 'antd';

const PreviewImage = previewObjectUrl => {
  return (
    <Card
      style={{
        width: 150,
        marginBottom: '10px',
        marginRight: '10px',
        display: 'inline-block'
      }}
      hoverable={true}
      bodyStyle={{ padding: 0 }}
      cover={<img alt="surfboard" src={previewObjectUrl.previewObjectUrl} />}
      actions={[
        <Icon type="star" key="star" />,
        <Icon type="delete" key="delete" />
      ]}
    ></Card>
  );
};

export default PreviewImage;
