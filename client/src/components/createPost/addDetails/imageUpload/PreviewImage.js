import React from 'react';
import { Card, Icon } from 'antd';

const PreviewImage = previewObjectUrl => {
  return (
    <Card
      style={{
        width: '150px',
        height: '200px',
        backgroundColor: '#f3f7f9',
        marginBottom: '10px',
        marginRight: '10px',
        display: 'inline-block',
        lineHeight: '148px'
      }}
      hoverable={true}
      bodyStyle={{ padding: 0 }}
      cover={
        <div style={{ width: 150, height: 150, textAlign: 'center' }}>
          <img
            style={{
              maxWidth: '148px',
              maxHeight: '150px',
              margin: 'auto',
              position: 'relative',
              right: '1px' //fix antd-card-border offset by 1 px
            }}
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
