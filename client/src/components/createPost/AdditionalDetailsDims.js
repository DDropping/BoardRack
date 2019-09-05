import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Form, Row, Col, Input } from 'antd';

import { AInput } from '../formAntComponents';

const AdditionalDetailsDims = () => {
  return (
    <Form>
      <Input.Group size="default">
        <Row gutter={8}>
          <Col xs={8} sm={6}>
            <h3 style={{ textAlign: 'center' }}>Length:</h3>
          </Col>
          <Col xs={8} sm={6}>
            <Field
              name="lengthFt"
              component={AInput}
              placeholder="6"
              size="default"
              suffix="ft."
            />
          </Col>
          <Col xs={8} sm={6}>
            <Field
              name="lengthIn"
              component={AInput}
              placeholder="2"
              size="default"
              suffix="in."
            />
          </Col>
        </Row>
      </Input.Group>

      <Row>
        <Col xs={8} sm={6}>
          <h3 style={{ textAlign: 'center' }}>Width:</h3>
        </Col>
        <Col xs={8} sm={6}>
          <Field
            name="width"
            component={AInput}
            placeholder="18 3/4"
            size="default"
            suffix="in."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={6}>
          <h3 style={{ textAlign: 'center' }}>Depth:</h3>
        </Col>
        <Col xs={8} sm={6}>
          <Field
            name="depth"
            component={AInput}
            placeholder="2 3/8"
            size="default"
            suffix="in."
          />
        </Col>
      </Row>

      <Row>
        <Col xs={8} sm={6}>
          <h3 style={{ textAlign: 'center' }}>Volume:</h3>
        </Col>
        <Col xs={8} sm={6}>
          <Field
            name="volume"
            component={AInput}
            placeholder="28"
            size="default"
            suffix="liters"
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
)(AdditionalDetailsDims);
