import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import AdditionalDetailsDims from './AdditionalDetailsDims';
import AdditionalDetailsFins from './AdditionalDetailsFins';
import AdditionalDetailsConstruction from './AdditionalDetailsConstruction';
import AdditionalDetailsOpinion from './AdditionalDetailsOpinion';

const AdditionalDetails = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: '600px',
          margin: 'auto',
          color: 'rgba(0,0,0,.50)'
        }}
      >
        *Additional details are recommended but not required. The more
        information provided, the more likely your board will be seen
      </div>
      <Row>
        <Col xs={24} sm={12} md={11}>
          <Divider>
            <Typography.Title level={3} type="secondary">
              Dimensions
            </Typography.Title>
          </Divider>
          <AdditionalDetailsDims />
        </Col>
        <Col xs={0} sm={2} md={2} />
        <Col xs={24} sm={10} md={11}>
          <Divider>
            <Typography.Title level={3} type="secondary">
              Tail & Fins
            </Typography.Title>
          </Divider>
          <AdditionalDetailsFins />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={12} md={11}>
          <Divider>
            <Typography.Title level={3} type="secondary">
              Your Opinion
            </Typography.Title>
          </Divider>
          <AdditionalDetailsOpinion />
        </Col>
        <Col xs={0} sm={2} md={2} />
        <Col xs={24} sm={10} md={11}>
          <Divider>
            <Typography.Title level={3} type="secondary">
              Construction
            </Typography.Title>
          </Divider>
          <AdditionalDetailsConstruction />
        </Col>
      </Row>
    </div>
  );
};

export default AdditionalDetails;
