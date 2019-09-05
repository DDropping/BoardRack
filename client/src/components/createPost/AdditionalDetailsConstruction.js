import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Select } from 'antd';

import { ASelect } from '../formAntComponents';

const AdditionalDetailsConstruction = () => {
  return (
    <Form>
      <Row>
        <Col xs={6} sm={7} md={6} lg={5}>
          <h3 style={{ textAlign: 'center' }}>System:</h3>
        </Col>
        <Col xs={18} sm={15} md={16} lg={17}>
          <Field
            name="finSystem"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Future">Future</Select.Option>
            <Select.Option value="FCS">FCS</Select.Option>
            <Select.Option value="FCS II">FCS II</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
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
  reduxForm({ form: 'createPost' })
)(AdditionalDetailsConstruction);
