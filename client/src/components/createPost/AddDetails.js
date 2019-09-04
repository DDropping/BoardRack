import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Button, Row, Col, Select, Divider, Input } from 'antd';

import AddDetailsInfo from './AddDetailsInfo';
import AddDetailsPhotos from './AddDetailsPhotos';

const AddDetails = () => {
  return (
    <Row>
      <Col xs={24} sm={12}>
        <AddDetailsInfo />
      </Col>
      <Col xs={24} sm={12}>
        Photos
      </Col>
    </Row>
  );
};

export default connect(
  null,
  null
)(AddDetails);
