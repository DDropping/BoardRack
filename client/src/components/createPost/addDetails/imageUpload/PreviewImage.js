import React from 'react';
import { Card, Icon } from 'antd';

import './imgUpload.css';

const PreviewImage = previewObjectUrl => {
  return (
    <Card
      className="preview-img-card"
      hoverable={true}
      bodyStyle={{ padding: 0 }}
      cover={
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <img
            className="preview-img-card-img"
            alt="surfboard"
            src={previewObjectUrl.previewObjectUrl}
          />
        </div>
      }
      actions={[
        <Icon type="star" key="star" />,
        <Icon type="delete" key="delete" />
      ]}
    ></Card>
  );
};

export default PreviewImage;
