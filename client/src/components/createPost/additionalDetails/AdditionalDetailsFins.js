import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Select } from 'antd';

import { ASelect, AInput } from '../../formAntComponents';

const AdditionalDetailsFins = () => {
  return (
    <Form>
      <Row>
        <Col xs={6} sm={7}>
          <h3 style={{ textAlign: 'center' }}>Shaper:</h3>
        </Col>
        <Col xs={18} sm={17}>
          <Field
            name="shaper"
            component={AInput}
            placeholder="Shaper..."
            size="default"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={6} sm={7}>
          <h3 style={{ textAlign: 'center' }}>Model:</h3>
        </Col>
        <Col xs={18} sm={17}>
          <Field
            name="model"
            component={AInput}
            placeholder="Model..."
            size="default"
          />
        </Col>
      </Row>

      <Row gutter={8}>
        <Col xs={6} sm={7} md={7} lg={7}>
          <h3 style={{ textAlign: 'center' }}>Fins:</h3>
        </Col>
        <Col xs={9} sm={8} md={8} lg={8}>
          <Field name="finSystem" component={ASelect} size="default">
            <Select.Option value="Future">Future</Select.Option>
            <Select.Option value="FCS">FCS</Select.Option>
            <Select.Option value="FCS II">FCS II</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Field>
        </Col>
        <Col xs={9} sm={9} md={9} lg={9}>
          <Field
            name="finConfiguration"
            component={ASelect}
            size="default"
            defaultActiveFirstOption
          >
            <Select.Option value="Single Fin">1 - Single Fin</Select.Option>
            <Select.Option value="Twin Fin">2 - Twin Fin</Select.Option>
            <Select.Option value="Thruster">3 - Thruster</Select.Option>
            <Select.Option value="Quad">4 - Quad</Select.Option>
            <Select.Option value="5 Fin">5 - 5 Fin</Select.Option>
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
  reduxForm({ form: 'createPost', destroyOnUnmount: false })
)(AdditionalDetailsFins);
