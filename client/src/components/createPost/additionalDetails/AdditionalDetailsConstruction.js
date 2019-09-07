import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Select } from 'antd';

import { ASelect, AInput } from '../../formAntComponents';

const AdditionalDetailsConstruction = () => {
  return (
    <Form>
      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Construction:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="construction"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="PU">PU(Fiberglass)</Select.Option>
            <Select.Option value="PE">PE(Epoxy)</Select.Option>
            <Select.Option value="EPS">EPS(Epoxy)</Select.Option>
            <Select.Option value="Foam">Foam</Select.Option>
            <Select.Option value="Wood">Wood</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
        </Col>
      </Row>

      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Glassing:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="glassing"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Standard">Performance</Select.Option>
            <Select.Option value="Performance">Standard</Select.Option>
            <Select.Option value="Heavy">Heavy</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
        </Col>
      </Row>

      <Row>
        <Col xs={9} sm={10} md={8} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Contour:</h3>
        </Col>
        <Col xs={15} sm={14} md={16} lg={17}>
          <Field
            name="countour"
            component={AInput}
            placeholder="single to double"
            size="default"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default compose(
  connect(
    null,
    null
  ),
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(AdditionalDetailsConstruction);
