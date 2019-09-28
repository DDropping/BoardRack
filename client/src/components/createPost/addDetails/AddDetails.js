import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import AddDetailsInfo from './AddDetailsInfo';
import AddDetailsPhotos from './AddDetailsPhotos';

const AddDetails = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: '600px',
          margin: 'auto',
          color: 'rgba(0,0,0,.50)',
          textAlign: 'center'
        }}
      >
        Create a new post by entering in a couple important details about your
        board, then upload some photos!
      </div>
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
          <AddDetailsPhotos />
        </Col>
      </Row>
    </div>
  );
};

export default AddDetails;
