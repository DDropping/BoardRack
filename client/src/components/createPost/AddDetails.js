import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import AddDetailsInfo from './AddDetailsInfo';
import AddDetailsPhotos from './AddDetailsPhotos';

const AddDetails = () => {
  return (
    <Row>
      <Col xs={24} sm={12}>
        <Divider>
          <Typography.Title level={3} type="secondary">
            Add the basic details
          </Typography.Title>
        </Divider>
        <AddDetailsInfo />
      </Col>
      <Col xs={24} sm={12}>
        <Divider>
          <Typography.Title level={3} type="secondary">
            Add photos
          </Typography.Title>
        </Divider>
        <AddDetailsPhotos />
      </Col>
    </Row>
  );
};

export default AddDetails;
