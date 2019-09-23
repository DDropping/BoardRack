import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import AddDetailsInfo from './AddDetailsInfo';
import AddDetailsPhotos from './AddDetailsPhotos';
import ImageUpload from './photoUpload/ImageUpload';

const AddDetails = () => {
  return (
    <Row>
      <Col xs={24} sm={12} md={12} className="wrapperCreatePostItem">
        <Divider>
          <Typography.Title level={3} style={{ color: '#4878a9' }}>
            Basic Details
          </Typography.Title>
        </Divider>
        <AddDetailsInfo />
      </Col>
      <Col xs={24} sm={12} md={12} className="wrapperCreatePostItem">
        <Divider>
          <Typography.Title level={3} style={{ color: '#4878a9' }}>
            Add Photos
          </Typography.Title>
        </Divider>
        <ImageUpload />
      </Col>
    </Row>
  );
};

export default AddDetails;
