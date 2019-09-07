import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import AddDetailsInfo from './AddDetailsInfo';
import AddDetailsPhotos from './AddDetailsPhotos';

const AddDetails = () => {
  return (
    <Row>
      <Col xs={24} sm={12} md={11}>
        <Divider>
          <Typography.Title level={3} style={{ color: '#23b0ba' }}>
            Add the basic details
          </Typography.Title>
        </Divider>
        <AddDetailsInfo />
      </Col>
      <Col xs={0} sm={2} md={2} />
      <Col xs={24} sm={10} md={11}>
        <Divider>
          <Typography.Title level={3} style={{ color: '#23b0ba' }}>
            Add photos
          </Typography.Title>
        </Divider>
        <AddDetailsPhotos />
      </Col>
    </Row>
  );
};

export default AddDetails;
